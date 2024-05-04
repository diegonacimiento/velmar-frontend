import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./products";

export interface Context {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: Role;
  setRoleUser: Dispatch<SetStateAction<Role>>;
  addressValue: string;
  updateAddressValue: (value: string) => void;
  cart: Cart[];
  updateCart: (product: IProduct, amount: number) => void;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
  deleteItemCart: (product: IProduct) => void;
  deleteAllCart: () => void;
}

export interface Cart {
  product: IProduct;
  amount: number;
}

export type Role = "customer" | "salesperson" | null;
