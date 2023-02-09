import {TaxType} from "../../enum/tax-type";

export interface TaxRequestDto {
  typeOfTax: TaxType;
  description: string;
  amount: number;
}
