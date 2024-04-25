"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

import { Category } from "@/types/categories";

interface CategoriesInputProps {
  categories: Category[];
  categoriesDropdown: Category[];
  setCategoriesDropdown: Dispatch<SetStateAction<Category[]>>;
}

const CategoriesInput: React.FC<CategoriesInputProps> = ({
  categories,
  categoriesDropdown,
  setCategoriesDropdown,
}) => {
  const [idsCategoriesOfProducts, setIdsCategoriesOfProducts] = useState(
    categoriesDropdown.map((category) => category.id)
  );

  const updateIdsCategoriesProduct = (categoriesProduct: Category[]) => {
    setIdsCategoriesOfProducts(
      categoriesProduct.map((category) => category.id)
    );
  }

  const handleAddCategory = () => {
    if (categoriesDropdown.length === 3) return;
    const firstCategory = categories.findIndex(
      (category) => !idsCategoriesOfProducts.includes(category.id)
    );
    const newCategoriesDropdown = [
      ...categoriesDropdown,
      categories[firstCategory],
    ];
    setCategoriesDropdown(newCategoriesDropdown);
    updateIdsCategoriesProduct(newCategoriesDropdown);
  };

  const handleRemoveCategory = (index: number) => {
    const copyCategoriesDropdown = [...categoriesDropdown];
    copyCategoriesDropdown.splice(index, 1);
    setCategoriesDropdown(copyCategoriesDropdown);
    updateIdsCategoriesProduct(copyCategoriesDropdown);
  };

  const handleSelectCategory = (categoryId: string, index: number) => {
    const category = categories.find(
      (category) => category.id === Number(categoryId)
    );
    if (category) {
      const copyCategoriesDropdown = [...categoriesDropdown];
      copyCategoriesDropdown[index] = category;
      setCategoriesDropdown(copyCategoriesDropdown);
      updateIdsCategoriesProduct(copyCategoriesDropdown);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-light">Category</label>

      {categoriesDropdown.map((category, index) => (
        <div
          className="flex items-center gap-2 w-full"
          key={category.id + category.name}
        >
          <select
            className="px-1.5 py-2 my-1 border border-secondary rounded-lg w-full focus:outline-0"
            onChange={(e) => handleSelectCategory(e.target.value, index)}
            value={category.id || ""}
          >
            {categories.map((itemCategory) => (
              <option
                key={itemCategory.name + itemCategory.id}
                value={itemCategory.id}
                disabled={idsCategoriesOfProducts.includes(itemCategory.id)}
              >
                {itemCategory.name}
              </option>
            ))}
          </select>

          {categoriesDropdown.length > 0 && (
            <button
              title="Remove category"
              type="button"
              onClick={() => handleRemoveCategory(index)}
              className="flex justify-center items-center h-8 w-8 rounded-full text-xl hover:bg-primary"
            >
              <MdOutlineDelete />
            </button>
          )}
        </div>
      ))}

      {categoriesDropdown.length < 3 && (
        <button
          title="Add category"
          type="button"
          onClick={handleAddCategory}
          className="border border-secondary p-2 mx-auto my-1 rounded-lg w-max hover:bg-primary"
        >
          Add category
        </button>
      )}
    </div>
  );
};

export default CategoriesInput;
