import { IPayloadUpdateUser, IUser } from "@/types/user";

export const preparePayload = (user: IUser, data: IPayloadUpdateUser) => {
  let payload: IPayloadUpdateUser = {};

  const dataPhone = data.phone === "" ? null : data.phone;

  if (user.username !== data.username) {
    payload.username = data.username;
  }

  if (user.fullname !== data.fullname) {
    payload.fullname = data.fullname;
  }

  if (user.email !== data.email) {
    payload.email = data.email;
  }

  if (user.phone !== dataPhone) {
    payload.phone = dataPhone;
  }

  if (isAddressDifferent(user.address, data.address)) {
    const dataAddressArray = Object.values(data.address || {});
    if (dataAddressArray.length > 0) {
      payload.address = data.address;
    } else {
      payload.address = null;
    }
  }

  return payload;
};

const isAddressDifferent = (
  user: IUser["address"],
  data: IPayloadUpdateUser["address"]
) => {
  if (!user && !data) {
    return false;
  }

  const userArray = Object.values(user || {});
  const dataArray = Object.values(data || {});
  if (userArray.length !== dataArray.length) {
    return true;
  }
  const isEqual = userArray.every((item, index) => item === dataArray[index]);
  return !isEqual;
};
