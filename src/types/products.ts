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

  isProtected: boolean;

  createdAt?: string;

  updatedAt?: string;

  deletedAt?: string;
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
  "T-35" = 35,
  "T-36" = 36,
  "T-37" = 37,
  "T-38" = 38,
  "T-39" = 39,
  "T-40" = 40,
  "T-41" = 41,
  "T-42" = 42,
  "T-43" = 43,
  "T-44" = 44,
}

export interface IProductFields {
  name: {
    value: string;
    error: string;
  };
  price: {
    value: string;
    error: string;
  };
  description: {
    value: string;
    error: string;
  };
  images: {
    value: IProduct["images"];
    error: string;
    currentImage: IProductImage;
    newColor: boolean;
  };
  categories: { value: IProduct["categories"]; error: string };
  brand: { value: IProduct["brand"]; error: string };
}

export interface IPayloadCreateProduct
  extends Omit<
    IProduct,
    "id" | "createdAt" | "updatedAt" | "deletedAt" | "brand" | "categories"
  > {
  brandId: number | null;
  categoriesIds: number[];
}

export interface IPayloadUpdateProduct extends Partial<IPayloadCreateProduct> {}

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
