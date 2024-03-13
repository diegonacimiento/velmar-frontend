"use client";
import React from "react";
import dynamic from "next/dynamic";

import useGeolocation from "@/hooks/useGeolocation";
import useVelmarContext from "@/hooks/useVelmarContext";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const SuccessPage = () => {
  const { addressValue } = useVelmarContext();
  const location = useGeolocation(addressValue);
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold my-4">Thanks for your purchase!</h2>
      <p>Your order will arrive in 3 days at the address of:</p>
      <Map location={location} />
    </div>
  );
};

export default SuccessPage;
