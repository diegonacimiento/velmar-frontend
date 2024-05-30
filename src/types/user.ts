export interface IUser {
  id: number;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  orders: any;

  username: string;

  email: string;

  fullname: string;

  role: ROLE;

  phone?: number;

  address?: string;
}

export interface IPayloadCreateUser
  extends Omit<
    IUser,
    "id" | "createdAt" | "updatedAt" | "deletedAt" | "orders"
  > {}

export interface IPayloadUpdateUser
  extends Partial <Omit<IPayloadCreateUser, "role">> {}

export enum ROLE {
  CUSTOMER = "customer",
  SALESPERSON = "salesperson",
}
