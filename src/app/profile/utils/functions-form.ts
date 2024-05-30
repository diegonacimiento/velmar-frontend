import { IPayloadUpdateUser, IUser } from "@/types/user";

export const preparePayload = (user: IUser, data: IPayloadUpdateUser) => {
  let payload: IPayloadUpdateUser = {};

  if (user.username !== data.username) {
    payload.username = data.username;
  }

  if (user.fullname !== data.fullname) {
    payload.fullname = data.fullname;
  }

  if (user.email !== data.email) {
    payload.email = data.email;
  }

  if (user.phone !== data.phone && data.phone) {
    payload.phone = data.phone;
  }

  if (user.address !== data.address && data.address) {
    payload.address = data.address;
  }

  return payload;
};
