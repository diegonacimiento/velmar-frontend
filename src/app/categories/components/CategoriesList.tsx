"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ICategory } from "@/types/categories";
import useVelmarContext from "@/hooks/useVelmarContext";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ICategoriesList {
  categories: ICategory[];
}

const CategoriesList: React.FC<ICategoriesList> = ({ categories }) => {
  const { roleUser } = useVelmarContext();
  const router = useRouter();

  const goToCreateCategory = () => {
    router.push("/categories/create");
  };

  const goToUpdateCategory = (id: number) => {
    router.push(`/categories/update/${id}`);
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl text-secondary font-bold text-center p-4">
        All categories
      </h2>

      {roleUser === "salesperson" && (
        <button
          type="button"
          title="Create category"
          onClick={goToCreateCategory}
          className="block p-4 m-auto self-center w-max rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
        >
          Create category
        </button>
      )}

      <div className="flex justify-center gap-8 p-4 w-full flex-wrap">
        {categories.map((category) => (
          <div
            id="card-product"
            key={category.id}
            className="max-w-88 w-full shadow-lg rounded-lg overflow-hidden text-secondary active:scale-105 duration-500"
          >
            <Link href={`/products?categories=${category.id}`}>
              <div>
                <Image
                  src={category.image}
                  alt={category.name}
                  height={960}
                  width={1170}
                />
                <h2 className="p-2 text-lg font-bold">{category.name}</h2>
              </div>
            </Link>
            {roleUser === "salesperson" && (
              <div className="flex gap-2 p-2">
                <button
                  type="button"
                  title="Update category"
                  onClick={() => goToUpdateCategory(category.id)}
                  className="text-lg hover:scale-110 duration-150"
                >
                  <FaPencilAlt />
                </button>
                <button
                  type="button"
                  title="Delete category"
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

export default CategoriesList;
