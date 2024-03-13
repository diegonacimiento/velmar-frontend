import { Product } from "./products";

export interface Context {
 addressValue: string;
 updateAddressValue: (value: string) => void;
 cart: Product[];
 updateCart: (products: Product[]) => void;
}