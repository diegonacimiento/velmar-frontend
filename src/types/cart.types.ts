import { IBrand } from "./brands";
import { IProduct, IProductImage, Size } from "./products";

export interface ICartItem {
  id: number;
  size: Size;
  quantity: number;
  name: string;
  price: string;
  images: IProduct["images"];
  brand: IBrand | null;
  color: IProductImage["color"];
}
