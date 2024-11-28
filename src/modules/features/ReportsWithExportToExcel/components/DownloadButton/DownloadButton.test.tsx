import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DownloadButton from "./DownloadButton";
import { exportToExcel } from "../../utils/exportToExcel";
import { IReport } from "../../interfaces/IReport";

jest.mock("../../utils/exportToExcel", () => ({
  exportToExcel: jest.fn(),
}));

describe("DownloadButton Component", () => {
  const mockReports: IReport[] = [
    {
      id: "1",
      date: "date",
      organization: "org",
      type: "закупка",
      estimatedCost: 10,
      desiredCompletionDate: "string;,",
      description: "string;",
    },
  ];
  const mockLabel = "Download Report";

  it("renders correctly with the given label", () => {
    render(<DownloadButton reportList={mockReports} label={mockLabel} />);
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it("calls exportToExcel with the correct arguments on click", () => {
    render(<DownloadButton reportList={mockReports} label={mockLabel} />);
    const button = screen.getByText(mockLabel);

    fireEvent.click(button);

    expect(exportToExcel).toHaveBeenCalledWith(mockReports, "Заявки.xlsx");
  });
});
