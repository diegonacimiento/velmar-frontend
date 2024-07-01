import { IBrand } from "./brands";
import { IUser } from "./user";

export interface IOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  products: {
    productId: number;
    name: string;
    price: string;
    quantity: number;
    brand: IBrand;
  } | null;
  status: ORDER_STATUS;
  user: Pick<
    IUser,
    "id" | "username" | "email" | "fullname" | "address" | "phone"
  >;
  total: number;
}

export enum ORDER_STATUS {
  IN_PROGRESS = "in-progress",
  SOLD = "sold",
}
