"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

import { IBrand } from "@/types/brands";
import useVelmarContext from "@/hooks/useVelmarContext";

interface IBrandsList {
  brands: IBrand[];
}

const BrandsList: React.FC<IBrandsList> = ({ brands }) => {
  const { roleUser } = useVelmarContext();
  const router = useRouter();

  const goToCreateBrand = () => {
    router.push("/brands/create");
  };

  const goToUpdateBrand = (id: number) => {
    router.push(`/brands/update/${id}`);
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl text-secondary font-bold text-center p-4">
        All brands
      </h2>

      {roleUser === "salesperson" && (
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
          <div
            id="card-product"
            key={brand.id}
            className="max-w-88 w-full shadow-lg rounded-lg overflow-hidden text-secondary active:scale-105 duration-500"
          >
            <Link href={`/products?brands=${brand.id}`}>
              <div>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  height={960}
                  width={1170}
                />
                <h2 className="p-2 text-lg font-bold">{brand.name}</h2>
              </div>
            </Link>
            {roleUser === "salesperson" && (
              <div className="flex gap-2 p-2">
                <button
                  type="button"
                  title="Update brand"
                  onClick={() => goToUpdateBrand(brand.id)}
                  className="text-lg hover:scale-110 duration-150"
                >
                  <FaPencilAlt />
                </button>
                <button
                  type="button"
                  title="Delete brand"
                  className="text-2xl text-red-600 hover:scale-110 duration-150"
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
