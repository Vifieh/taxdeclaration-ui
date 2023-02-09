import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TaxRequestDto} from "../../model/payload/tax-request-dto";
import {Observable} from "rxjs";
import {TaxDTO} from "../../model/dto/tax-dto";
import {ResponseMessage} from "../../model/response-message";
import {TaxType} from "../../enum/tax-type";

@Injectable({
  providedIn: 'root'
})
export class DeclareTaxService {
  baseUrlPro: string = environment.baseUrlPro + '/declareTaxes';

  constructor(private http: HttpClient) { }

  declareTax(taxRequestDto: TaxRequestDto): Observable<TaxDTO> {
    return this.http.post<TaxDTO>(
      `${this.baseUrlPro}`,
      taxRequestDto
    );
  }

  updateDeclaredTax(declaredTaxId: string, taxRequestDto: TaxRequestDto): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(
        `${this.baseUrlPro}`,
      taxRequestDto
    );
  }

  getDeclaredTax(declaredTaxId?: string): Observable<TaxDTO> {
    return this.http.get<TaxDTO>(
      `${this.baseUrlPro}/${declaredTaxId}`,
    );
  }

  getTaxesDeclaredByUser(taxType?: TaxType): Observable<TaxDTO[]> {
    return this.http.get<TaxDTO[]>(
    `${this.baseUrlPro}?taxType=${taxType}`,
    );
  }

    deleteDeclaredTax(declaredTaxId?: string): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(
      `${this.baseUrlPro}?declaredTaxId=${declaredTaxId}`,
    );
  }
}
