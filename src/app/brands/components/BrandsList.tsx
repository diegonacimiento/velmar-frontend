"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { IBrand } from "@/types/brands";
import useVelmarContext from "@/hooks/useVelmarContext";
import BrandCard from "./BrandCard";

interface IBrandsList {
  brands: IBrand[];
}

const BrandsList: React.FC<IBrandsList> = ({ brands }) => {
  const { roleUser } = useVelmarContext();
  const router = useRouter();

  const goToCreateBrand = () => {
    router.push("/brands/create");
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl text-secondary font-bold text-center p-4">
        All brands
      </h2>

      {roleUser === "salesperson" || roleUser === "superadmin" && (
        <button
          type="button"
          title="Create brand"
          onClick={goToCreateBrand}
          className="block p-4 m-auto self-center w-max rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
        >
          Create brand
        </button>
      )}

      <div className="flex justify-center gap-8 p-4 w-full flex-wrap">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
