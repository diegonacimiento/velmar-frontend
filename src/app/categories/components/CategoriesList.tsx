"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { ICategory } from "@/types/categories";
import useVelmarContext from "@/hooks/useVelmarContext";
import CategoryCard from "./CategoryCard";

interface ICategoriesList {
  categories: ICategory[];
}

const CategoriesList: React.FC<ICategoriesList> = ({ categories }) => {
  const { roleUser } = useVelmarContext();
  const router = useRouter();

  const goToCreateCategory = () => {
    router.push("/categories/create");
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl text-secondary font-bold text-center p-4">
        All categories
      </h2>

      {(roleUser === "salesperson" || roleUser === "superadmin") && (
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
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
