import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./products";

export interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: TRole;
  setRoleUser: Dispatch<SetStateAction<TRole>>;
  addressValue: string;
  updateAddressValue: (value: string) => void;
  cart: ICart[];
  updateCart: (product: IProduct, amount: number) => void;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
  deleteItemCart: (product: IProduct) => void;
  deleteAllCart: () => void;
}

export interface ICart {
  product: IProduct;
  amount: number;
}

export type TRole = "customer" | "salesperson" | null;
