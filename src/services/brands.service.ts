import axios from "axios";

import {
  IBrand,
  IPayloadCreateBrand,
  IPayloadUpdateBrand,
} from "@/types/brands";

export const getBrands = async (): Promise<IBrand[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/brands`, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBrand = async (id: string): Promise<IBrand> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/brands/${id}`,
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

export const createBrand = async (payload: IPayloadCreateBrand) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/brands`,
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

export const updateBrand = async (
  id: number,
  payload: IPayloadUpdateBrand
): Promise<IBrand> => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/brands/${id}`,
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

export const deleteBrand = async (id: number) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/brands/${id}`,
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
