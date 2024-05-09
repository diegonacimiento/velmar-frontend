import axios from "axios";

import {
  IPayloadCreateProduct,
  IPayloadUpdateProduct,
  IProduct,
} from "@/types/products";
import { headers } from "next/headers";

export const getProducts = async (
  offset?: number,
  limit?: number,
  category?: string,
  name?: string
): Promise<IProduct[]> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const params =
      (limit ? `?limit=${limit}` : "") +
      (offset ? `&offset=${offset}` : "") +
      (name ? `?name=${name}` : "");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/products${params}`,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProduct = async (id: number): Promise<IProduct> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/products/${id}`,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProduct = async (payload: IPayloadCreateProduct) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/products`,
      payload,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (
  id: number,
  payload: IPayloadUpdateProduct
) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/products/${id}`,
      payload,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
