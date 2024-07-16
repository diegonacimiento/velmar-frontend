"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import { getUser } from "@/services/users.service";
import { IAddress, IUser } from "@/types/user";
import Loading from "./components/Loading";
import useVelmarContext from "@/hooks/useVelmarContext";

const InformationPage = () => {
  const [address, setaddress] = useState<IAddress>();
  const [phone, setPhone] = useState<IUser["phone"]>();
  const [loading, setLoading] = useState<boolean>(true);

  const { updateAddressValue } = useVelmarContext();

  useEffect(() => {
    const get = async () => {
      const user = await getUser();
      setaddress(user.address || undefined);
      setPhone(user.phone);
      setLoading(false);
    };
    get();
  }, []);

  const router = useRouter();

  const handleSubmit = (formData: {
    address: IAddress;
    phone: IUser["phone"];
  }) => {
    updateAddressValue(formData.address);
    router.push("/payment");
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mx-4 sm:mx-24 my-12 shadow-md rounded-lg w-500p bg-primary text-secondary">
      <h2 className="text-xl font-semibold">Add shipping address</h2>
      <Form
        buttonText="Confirm"
        fields={[
          {
            label: "Address",
            type: "text",
            value: address,
            isOptional: true,
          },
          {
            label: "Phone",
            type: "number",
            value: phone,
            isOptional: true,
          },
        ]}
        onSubmit={handleSubmit}
        page="information"
      />
    </div>
  );
};

export default InformationPage;
