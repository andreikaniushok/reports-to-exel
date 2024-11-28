import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { REPORTS } from "./modules/REPORTS";
import ReportsWithExportToExcel from "./modules/features/ReportsWithExportToExcel/ReportsWithExportToExcel";

jest.mock(
  "./modules/features/ReportsWithExportToExcel/ReportsWithExportToExcel",
  () => {
    return jest.fn(({ reportsList }) => (
      <div>Mocked ReportsWithExportToExcel: {reportsList.length}</div>
    ));
  }
);

test("renders ReportsWithExportToExcel component with reportsList", async () => {
  render(<App />);

  await waitFor(() => {
    const mockedComponent = screen.getByText(
      /Mocked ReportsWithExportToExcel:/i
    );
    expect(mockedComponent).toBeInTheDocument();
  });

  expect(ReportsWithExportToExcel).toHaveBeenCalledWith(
    expect.objectContaining({
      reportsList: REPORTS,
    }),
    {}
  );
});
