import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ReportsTable from "./ReportsTable";
import { IReport } from "../../interfaces/IReport";

const mockReports: IReport[] = [
  {
    id: "1",
    date: "2024-11-01",
    organization: "Org1",
    type: "закупка",
    estimatedCost: 1000,
    desiredCompletionDate: "2024-12-01",
    description: "Описание заявки 1",
  },
  {
    id: "2",
    date: "2024-11-02",
    organization: "Org2",
    type: "ремонт",
    estimatedCost: 500,
    desiredCompletionDate: "2024-12-02",
    description: "Описание заявки 2",
  },
];

describe("ReportsTable", () => {
  test("renders table with headers", () => {
    render(<ReportsTable reportsList={mockReports} />);

    expect(screen.getByText("№")).toBeInTheDocument();
    expect(screen.getByText("Организация")).toBeInTheDocument();
    expect(screen.getByText("Дата")).toBeInTheDocument();
    expect(screen.getByText("Тип")).toBeInTheDocument();
    expect(screen.getByText("Предполагаемая стоимость")).toBeInTheDocument();
    expect(screen.getByText("Желаемая дата завершения")).toBeInTheDocument();
    expect(screen.getByText("Описание")).toBeInTheDocument();
  });

  test("renders report data correctly", () => {
    render(<ReportsTable reportsList={mockReports} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Org1")).toBeInTheDocument();
    expect(screen.getByText("2024-11-01")).toBeInTheDocument();
    expect(screen.getByText("закупка")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("2024-12-01")).toBeInTheDocument();
    expect(screen.getByText("Описание заявки 1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Org2")).toBeInTheDocument();
    expect(screen.getByText("2024-11-02")).toBeInTheDocument();
    expect(screen.getByText("ремонт")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText("2024-12-02")).toBeInTheDocument();
    expect(screen.getByText("Описание заявки 2")).toBeInTheDocument();
  });

  test("renders empty table when no reports are provided", () => {
    render(<ReportsTable reportsList={[]} />);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("Org1")).not.toBeInTheDocument();
    expect(screen.queryByText("2024-11-01")).not.toBeInTheDocument();
  });

  test("renders correct number of rows for reports", () => {
    render(<ReportsTable reportsList={mockReports} />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(mockReports.length + 1);
  });

  test("does not render any data if reports list is empty", () => {
    render(<ReportsTable reportsList={[]} />);

    expect(screen.queryAllByRole("row")).toHaveLength(1);
  });
});
