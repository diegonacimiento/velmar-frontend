import { Dispatch, SetStateAction } from "react";

import { IProduct, Size } from "./products";
import { ICart } from "./cart.types";

export interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  roleUser: TRole;
  setRoleUser: Dispatch<SetStateAction<TRole>>;
  addressValue: string;
  updateAddressValue: (value: string) => void;
  cart: ICart;
  updateCart: (product: IProduct, amount: number, size: Size) => void;
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
  deleteItemCart: (product: IProduct, size: Size) => void;
  deleteAllCart: () => void;
}

export type TRole = "customer" | "salesperson" | null;
