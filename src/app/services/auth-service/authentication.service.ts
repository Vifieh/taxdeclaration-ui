import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseMessage} from "../../model/response-message";
import {LoginRequestDTO, RegisterRequestDTO} from "../../model/user";
import {LoginDTO} from "../../model/dto/login-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  register(registerRequestDTO: RegisterRequestDTO): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(
      `${this.baseUrl}/register`,
      registerRequestDTO
    );
  }

  login(loginRequestDTO: LoginRequestDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(
      `${this.baseUrl}/login`,
      loginRequestDTO
    );
  }

  resendVerification(email: string): Observable<ResponseMessage> {
    return this.http.put<ResponseMessage>(
      `${this.baseUrl}/resend-verification-link`,
      email
    );
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/refreshToken`,
      token
    );
  }
}
