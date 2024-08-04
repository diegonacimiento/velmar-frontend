import { IBrand } from "./brands";
import { IProductImage, Size } from "./products";
import { IUser } from "./user";

export interface IOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  products:
    | [
        {
          id: number;
          name: string;
          price: string;
          quantity: number;
          size: Size;
          color: IProductImage["color"];
          brand: IBrand;
        }
      ]
    | null;
  status: ORDER_STATUS;
  user: Pick<
    IUser,
    "id" | "username" | "email" | "fullname" | "address" | "phone"
  >;
  total: number;
}

export interface ICreateOrder {}

export enum ORDER_STATUS {
  IN_PROGRESS = "in-progress",
  SOLD = "sold",
}
