import {Role} from "../../enum/role";

export interface LoginDTO {
  accessToken: string
  email: string
  id: string
  expiredIn: Date
  refreshToken: string
  role: Role[]
  type: string
}
