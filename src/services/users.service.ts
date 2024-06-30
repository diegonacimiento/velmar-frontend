import axios from "axios";

import { IPayloadUpdatePassword, IPayloadUpdateUser, IUser } from "@/types/user";

export const getUser = async (): Promise<IUser> => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/users/profile`,
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

export const updateUser = async (payload: IPayloadUpdateUser) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/users`,
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

export const updatePassword = async (payload: IPayloadUpdatePassword) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000))
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_URL}/users/update-my-password`,
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
