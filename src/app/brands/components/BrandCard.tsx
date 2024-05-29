"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete, MdErrorOutline } from "react-icons/md";

import { IBrand } from "@/types/brands";
import { deleteBrand } from "@/services/brands.service";
import useVelmarContext from "@/hooks/useVelmarContext";

interface IBrandCard {
  brand: IBrand;
}

const BrandCard: React.FC<IBrandCard> = ({ brand }) => {
  const router = useRouter();
  const { roleUser } = useVelmarContext();

  const [msgDelete, setMsgDelete] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

  const goToUpdateBrand = (id: number) => {
    router.push(`/brands/update/${id}`);
  };

  const handleDeleteBrand = () => {
    setMsgDelete("Are you sure you want to delete the brand?");
  };

  const handleNo = () => {
    setMsgDelete("");
  };

  const handleYes = async () => {
    try {
      setMsgDelete("");
      await deleteBrand(brand.id);
      router.refresh();
    } catch (error) {
      console.error(error);
      setMsgError("An error occurred while deleting, try again");
    }
  };

  return (
    <div
      id="card-product"
      className="relative max-w-88 w-full shadow-lg rounded-lg overflow-hidden text-secondary active:scale-105 duration-500"
    >
      {msgDelete && (
        <div className="absolute z-10 top-0 bottom-0 flex justify-center flex-col gap-4 p-4 w-full bg-body bg-opacity-80 backdrop-blur-sm">
          <p className="text-lg p-2 text-center">{msgDelete}</p>
          <div className="flex">
            <button
              type="button"
              title="No"
              onClick={handleNo}
              className="block p-2 m-auto self-center w-full max-w-20 rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
            >
              No
            </button>
            <button
              type="button"
              title="Yes"
              onClick={handleYes}
              className="block p-2 m-auto self-center w-full max-w-20 rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
            >
              Yes
            </button>
          </div>
        </div>
      )}

      <Link href={`/products?brands=${brand.id}`}>
        <div>
          <div className="flex justify-center px-2 py-8 text-center text-5xl">
            {brand.name}
          </div>
        </div>
      </Link>
      {roleUser === "salesperson" && (
        <>
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
              onClick={handleDeleteBrand}
              className="text-2xl text-red-600 hover:scale-110 duration-150"
            >
              <MdDelete />
            </button>
          </div>
          <p className="flex justify-center items-center gap-1 p-2 text-red-600">
            {msgError && (
              <>
                <MdErrorOutline /> {msgError}
              </>
            )}
          </p>
        </>
      )}
    </div>
  );
};

export default BrandCard;
