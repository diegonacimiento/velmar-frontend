"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import { getUser } from "@/services/users.service";
import { IAddress, IUser } from "@/types/user";
import Loading from "./components/Loading";
import useVelmarContext from "@/hooks/useVelmarContext";
import { IoMdArrowRoundBack } from "react-icons/io";

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

  const handleBack = () => {
    router.back();
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col p-4 sm:p-0 w-full max-w-[31.25rem]">
      <button
        type="button"
        title="Back"
        onClick={handleBack}
        className="flex justify-center items-center gap-1 mt-12 mb-6 w-max rounded-md text-secondary hover:scale-105 duration-150"
      >
        <IoMdArrowRoundBack />
        Back
      </button>
      
      <div className="flex flex-col justify-center gap-4 px-6 py-12 sm:px-12 mb-12 shadow-md rounded-lg w-full max-w-[31.25rem] bg-primary text-secondary">
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
    </div>
  );
};

export default InformationPage;
