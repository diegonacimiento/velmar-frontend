import axios from "axios";

import { INewPassword, ISignInData } from "@/types/auth";

export const signIn = async (payload: ISignInData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/login`,
      { email: payload["your email"], password: payload["your password"] },
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

export const signOut = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/auth/logout`,
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

export const newPassord = async (payload: INewPassword) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/change-password`,
      payload,
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

export const forgotPassword = async (email: string) => {
  // await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/auth/forgot-password`,
      { email },
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
