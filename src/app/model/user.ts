import {Role} from "../enum/role";

export interface User {
  id: string;
  email: string;
  password: string;
  role: Role[];
}

export interface RegisterRequestDTO {
  companyName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: Role;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

