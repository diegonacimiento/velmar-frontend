"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete, MdErrorOutline, MdOutlineSecurity } from "react-icons/md";
import { useRouter } from "next/navigation";

import { ICategory } from "@/types/categories";
import useVelmarContext from "@/hooks/useVelmarContext";
import { deleteCategory } from "@/services/categories.service";

interface ICategoryCard {
  category: ICategory;
}

const CategoryCard: React.FC<ICategoryCard> = ({ category }) => {
  const { roleUser } = useVelmarContext();
  const router = useRouter();

  const [msgDelete, setMsgDelete] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [disabledBt, setDisabledBt] = useState<boolean>(
    category.isProtected && roleUser !== "superadmin"
  );

  const goToUpdateCategory = (id: number) => {
    router.push(`/categories/update/${id}`);
  };

  const handleDeleteCategory = () => {
    setMsgDelete("Are you sure you want to delete the category?");
  };

  const handleNo = () => {
    setMsgDelete("");
  };

  const handleYes = async () => {
    try {
      setMsgDelete("");
      await deleteCategory(category.id);
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
        <div className="z-10 absolute top-0 bottom-0 flex justify-center flex-col gap-12 p-4 w-full bg-body bg-opacity-80 backdrop-blur-sm">
          <p className="text-xl p-2 text-center">{msgDelete}</p>
          <div className="flex">
            <button
              type="button"
              title="No"
              onClick={handleNo}
              className="block p-4 m-auto self-center w-full max-w-20 rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
            >
              No
            </button>
            <button
              type="button"
              title="Yes"
              onClick={handleYes}
              className="block p-4 m-auto self-center w-full max-w-20 rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
            >
              Yes
            </button>
          </div>
        </div>
      )}

      <Link href={`/products?categories=${category.id}`}>
        <div>
          <Image
            src={category.image}
            alt={category.name}
            height={960}
            width={1170}
          />
          <h2 className="p-4 text-lg font-bold">{category.name}</h2>
        </div>
      </Link>
      {(roleUser === "salesperson" || roleUser === "superadmin") && (
        <>
          <div className="flex gap-2 p-4">
            <button
              type="button"
              title="Update category"
              onClick={() => goToUpdateCategory(category.id)}
              disabled={disabledBt}
              className={
                "text-lg " +
                (disabledBt
                  ? "cursor-not-allowed opacity-30 "
                  : "hover:scale-110 duration-150")
              }
            >
              <FaPencilAlt />
            </button>
            <button
              type="button"
              title="Delete category"
              onClick={handleDeleteCategory}
              disabled={disabledBt}
              className={
                "text-2xl text-red-600 " +
                (disabledBt
                  ? "cursor-not-allowed opacity-30 "
                  : "hover:scale-110 duration-150")
              }
            >
              <MdDelete />
            </button>
            {(category.isProtected) && (
              <div className="ml-auto flex gap-1 items-center justify-center w-max text-xs">
                <MdOutlineSecurity />

                <p>Protected by administrator</p>
              </div>
            )}
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

export default CategoryCard;
