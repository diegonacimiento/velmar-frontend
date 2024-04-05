import { Dispatch, SetStateAction } from "react";
import { Product } from "./products";

export interface Context {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: Role;
  setRoleUser: Dispatch<SetStateAction<Role>>;
  addressValue: string;
  updateAddressValue: (value: string) => void;
  cart: Cart[];
  updateCart: (product: Product, amount: number) => void;
  products: Product[];
  updateProducts: (products: Product[]) => void;
  deleteItemCart: (product: Product) => void;
  deleteAllCart: () => void;
}

export interface Cart {
  product: Product;
  amount: number;
}

export type Role = "customer" | "salesperson" | null;
