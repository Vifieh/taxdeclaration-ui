export interface TaxDTO {
  id: string;
  typOfTax: TaskType;
  description: string;
  amount: number;
  amountToPay: number;
  paid: boolean;
  createdAt: string
}
