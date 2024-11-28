import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import Filters from "./Filters";
import { mockReports } from "../../test/mockReport";

const mockStore = configureStore();
const store = mockStore({
  reports: {
    reportsList: [],
    filters: {
      type: "all",
      organization: "all",
      date: "all",
    },
  },
});

describe("Filters component", () => {
  it("should render the Filters component correctly", () => {
    render(
      <Provider store={store}>
        <Filters reportsList={mockReports} />
      </Provider>
    );

    expect(screen.getByText(/Тип заявки/i)).toBeInTheDocument();
    expect(screen.getByText(/Организация/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата/i)).toBeInTheDocument();
  });

  it("should filter reports based on type", async () => {
    render(
      <Provider store={store}>
        <Filters reportsList={mockReports} />
      </Provider>
    );

    const typeFilter = screen.getByLabelText(/Тип заявки/i);
    fireEvent.change(typeFilter, { target: { value: "закупка" } });

    await waitFor(() => {
      const filteredReports = mockReports.filter(
        (report) => report.type === "закупка"
      );
      expect(filteredReports.length).toBeGreaterThan(0);
    });
  });

  it("should filter reports based on organization", async () => {
    render(
      <Provider store={store}>
        <Filters reportsList={mockReports} />
      </Provider>
    );

    const organizationFilter = screen.getByLabelText(/Организация/i);
    fireEvent.change(organizationFilter, { target: { value: "Org1" } });

    await waitFor(() => {
      const filteredReports = mockReports.filter(
        (report) => report.organization === "Org1"
      );
      expect(filteredReports.length).toBeGreaterThan(0);
    });
  });

  it("should filter reports based on date", async () => {
    render(
      <Provider store={store}>
        <Filters reportsList={mockReports} />
      </Provider>
    );

    const dateFilter = screen.getByLabelText(/Дата/i);
    fireEvent.change(dateFilter, { target: { value: "2024-11-01" } });

    await waitFor(() => {
      const filteredReports = mockReports.filter(
        (report) => report.date === "2024-11-01"
      );
      expect(filteredReports.length).toBeGreaterThan(0);
    });
  });
});
