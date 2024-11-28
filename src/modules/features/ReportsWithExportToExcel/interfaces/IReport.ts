export interface IReport {
  id: string;
  date: string;
  organization: string;
  type: "закупка" | "ремонт";
  estimatedCost: number;
  desiredCompletionDate: string;
  description?: string;
}
