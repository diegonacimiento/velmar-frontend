import { IBrand } from "./brands";
import { ICategory } from "./categories";

export interface IProduct {
  id: number;

  name: string;

  description: string;

  price: string;

  images: IProductImage[];

  brand: IBrand | null;

  categories: ICategory[];

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}

export interface IProductImage {
  color: string;
  urls: string[];
  sizes: Size[];
}

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  "2XL" = "2XL",
  "3XL" = "3XL",
}

export interface IPayloadCreateProduct
  extends Omit<
    IProduct,
    "id" | "createdAt" | "updatedAt" | "deletedAt" | "brand" | "categories"
  > {
  brandId: number | null;
  categoriesIds: number[];
}

export interface IPayloadUpdateProduct
  extends Omit<IProduct, "categories" | "brand"> {
  categories: number[];
  brand: number;
}

export interface ColorsTools {
  colorsImage: string[];
  handleNewColor: (color: string) => void;
  removeColor: (color: string) => void;
}

export interface SizesTools {
  addSize: (size: any) => void;
  removeSize: (size: any) => void;
  sizes: Size[];
}
