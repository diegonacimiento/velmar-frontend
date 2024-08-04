"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";

import useGeolocation from "@/hooks/useGeolocation";
import useVelmarContext from "@/hooks/useVelmarContext";
import { useRouter } from "next/navigation";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const SuccessPage = () => {
  const router = useRouter();

  const { addressValue } = useVelmarContext();
  const address = Object.values(addressValue).join(", ");
  const location = useGeolocation(address);

  const handleGoProducts = () => {
    router.push("/products");
  };

  return (
    <div className="w-full p-4 text-secondary">
      <h2 className="my-2 text-xl font-semibold">Thanks for your purchase!</h2>
      <button
        title="Keep buying"
        type="button"
        onClick={handleGoProducts}
        className="flex gap-1 items-center p-2 bg-secondary rounded-md text-body hover:scale-105 hover:opacity-70 duration-150"
      >
        Keep buying
        <div className="flex">
          <LuArrowRight className="text-xl" />
          <MdOutlineShoppingCart className="text-xl" />
        </div>
      </button>
      <p className="my-2">
        Your order will arrive in 3 days at the address of:
      </p>
      <Map location={location} />
    </div>
  );
};

export default SuccessPage;
