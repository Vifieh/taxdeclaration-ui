import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TaxRequestDto} from "../../model/payload/tax-request-dto";
import {Observable} from "rxjs";
import {TaxDTO} from "../../model/dto/tax-dto";
import {ResponseMessage} from "../../model/response-message";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrlPro: string = environment.baseUrlPro + '/payments';

  constructor(private http: HttpClient) { }

  payDeclareTax(declaredTaxId?: string): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(
      `${this.baseUrlPro}/taxes?declaredTaxId=${declaredTaxId}`,
      null
    );
  }
}
