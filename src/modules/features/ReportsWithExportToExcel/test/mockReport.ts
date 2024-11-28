import { IReport } from "../interfaces/IReport";

export const mockReports: IReport[] = [
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
