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

  address?: IAddress;
}

export interface IPayloadCreateUser
  extends Omit<
    IUser,
    "id" | "createdAt" | "updatedAt" | "deletedAt" | "orders"
  > {}

export interface IPayloadUpdateUser
  extends Partial<Omit<IPayloadCreateUser, "role">> {}

export enum ROLE {
  CUSTOMER = "customer",
  SALESPERSON = "salesperson",
}

export interface IAddress {
  street: string;
  apartment: string;
  city: string;
  state: string;
  country: string;
}
