import React from "react";

import { categoriesList } from "@/utils/temporal";

const CategoriesInput = () => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-light">Category</label>
      <select className="px-1.5 py-2 my-1 border border-secondary rounded-lg focus:outline-0">
        {categoriesList.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="button">Add other category</button>
    </div>
  );
};

export default CategoriesInput;
