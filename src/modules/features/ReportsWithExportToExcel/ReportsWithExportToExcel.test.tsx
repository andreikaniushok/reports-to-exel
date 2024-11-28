import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ReportsWithExportToExcel from "./ReportsWithExportToExcel";
import filteredReportsReducer from "./modules/features/store/FilteredReports.slice";
import { IReport } from "./interfaces/IReport";
import { mockReports } from "./test/mockReport";

const mockStore = configureStore({
  reducer: {
    filteredReports: filteredReportsReducer,
  },
  preloadedState: {
    filteredReports: {
      filteredReports: mockReports,
    },
  },
});

jest.mock("./components/DownloadButton/DownloadButton", () => ({
  __esModule: true,
  default: () => <div>DownloadButton</div>,
}));

jest.mock("./components/Filters/Filters", () => ({
  __esModule: true,
  default: () => <div>Filter</div>,
}));

jest.mock("./components/ReportsTable/ReportsTable", () => ({
  __esModule: true,
  default: ({ reportsList }: { reportsList: IReport[] }) => (
    <div>
      {reportsList.map((report: IReport) => (
        <div key={report.id}>{report.organization}</div>
      ))}
    </div>
  ),
}));

describe("ReportsWithExportToExcel", () => {
  it("should render inner components and display reports", () => {
    render(
      <Provider store={mockStore}>
        <ReportsWithExportToExcel reportsList={mockReports} />
      </Provider>
    );

    expect(screen.getByText("DownloadButton")).toBeInTheDocument();
    expect(screen.getByText("Filter")).toBeInTheDocument();

    expect(screen.getByText("Org1")).toBeInTheDocument();
    expect(screen.getByText("Org2")).toBeInTheDocument();
  });
});
