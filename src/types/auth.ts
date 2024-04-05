import { Role } from "./context";

export interface PayloadToken {
  role: Role;
  sub: number;
  iat: number;
  exp: number;
}

export interface SignInData {
  "your email": string;
  "your password": string;
}
