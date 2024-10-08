import React, { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

import { IProductFields } from "@/types/products";
import { ICategory } from "@/types/categories";
import { formStyles } from "../../../styles/FormStyles";
import { setField } from "../utils/validate-form";

interface ICategoriesProps {
  categories: IProductFields["categories"];
  setFields: Dispatch<SetStateAction<IProductFields>>;
  allCategories: ICategory[];
}

const Categories: React.FC<ICategoriesProps> = ({
  categories,
  setFields,
  allCategories,
}) => {
  const [noCategories, setNoCategories] = useState<boolean>(false);

  const idCategoriesInProduct = categories?.value?.map(
    (category) => category?.id
  );

  const availableCategories = allCategories.filter(
    (category) => !idCategoriesInProduct.includes(category.id)
  );

  const handleAddCategories = () => {
    if (allCategories.length > 0) {
      setField(
        "categories",
        [...categories.value, availableCategories[0]],
        setFields
      );
    } else {
      setNoCategories(true);
    }
  };

  const handleSelectCategory = (id: string, index: number) => {
    const category = availableCategories.find(
      (category) => category.id === Number(id)
    );
    if (category) {
      const copyCategoriesValue = [...categories.value];
      copyCategoriesValue[index] = category;
      setField("categories", copyCategoriesValue, setFields);
    }
  };

  const handleDeleteCategory = (index: number) => {
    const copyCategoriesValue = [...categories.value];
    copyCategoriesValue.splice(index, 1);
    setField("categories", copyCategoriesValue, setFields);
  };

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Categories</label>
      {categories?.value?.map((categoryPayload, index) => (
        <div key={categoryPayload?.id}>
          <div className={formStyles.containerSelect}>
            <select
              name="categories"
              defaultValue={categoryPayload?.id}
              onChange={(event) =>
                handleSelectCategory(event.target.value, index)
              }
              className={formStyles.select}
            >
              {allCategories.map((category) => (
                <option
                  value={category.id}
                  key={category.id}
                  disabled={idCategoriesInProduct.includes(category.id)}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              title="Delete category"
              onClick={() => handleDeleteCategory(index)}
              className={formStyles.buttonDelete}
            >
              <MdOutlineDelete />
            </button>
          </div>
          <p className={formStyles.error}></p>
        </div>
      ))}

      {categories.value.length < 3 && (
        <>
          <button
            type="button"
            title="Add categories"
            onClick={handleAddCategories}
            className={formStyles.buttonPrimary}
          >
            Add categories
          </button>
          {noCategories && (
            <p className="text-center text-xs text-red-600">
              No categories available
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Categories;
