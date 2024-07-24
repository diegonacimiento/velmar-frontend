import { IPayloadCreateUser, IUser } from "@/types/user";

export interface IFormDataCreateUser
  extends Omit<
    IPayloadCreateUser,
    "id" | "createdAt" | "updatedAt" | "deletedAt" | "orders"
  > {
  "confirm password": string;
}

export const preparedPayload = (
  formData: IFormDataCreateUser
): IPayloadCreateUser => {
  const { "confirm password": confirmPassword, ...payload } = formData;

  if (!payload.address) {
    delete payload.address;
  }

  if (!payload.phone) {
    delete payload.phone;
  }

  return { ...payload };
};
