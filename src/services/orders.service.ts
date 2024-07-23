import axios from "axios";

import { IOrder } from "@/types/orders";
import { LIMIT } from "@/utils/constants";

export const getOrders = async (
  offset = 0,
  limit = LIMIT
): Promise<IOrder[]> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/orders?offset=${offset}&limit=${limit}`,
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

export const getOrder = async (id: number): Promise<IOrder> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/orders/${id}`,
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

export const createOrder = async (payload: any): Promise<IOrder> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/orders`,
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
