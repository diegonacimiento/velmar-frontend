import { TRole } from "./context";

export interface IPayloadToken {
  role: TRole;
  sub: number;
  iat: number;
  exp: number;
}

export interface ISignInData {
  "your email": string;
  "your password": string;
}
