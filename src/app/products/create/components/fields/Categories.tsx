import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineDelete } from "react-icons/md";

import { IPayload } from "../Form";
import { ICategory } from "@/types/categories";
import { formStyles } from "../../styles/FormStyles";
import { setField } from "../../utils/validate-form";

interface ICategoriesProps {
  categories: IPayload["categories"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
  allCategories: ICategory[];
}

const Categories: React.FC<ICategoriesProps> = ({ categories, setPayload, allCategories, }) => {
  const idCategoriesInProduct = categories.value.map((category) => category.id);

  const availableCategories = allCategories.filter(
    (category) => !idCategoriesInProduct.includes(category.id)
  );

  const handleAddCategories = () => {
    setField(
      "categories",
      [...categories.value, availableCategories[0]],
      setPayload
    );
  };

  const handleSelectCategory = (id: string, index: number) => {
    const category = availableCategories.find((category) => category.id === Number(id));
    if (category) {
      const copyCategoriesValue = [...categories.value];
      copyCategoriesValue[index] = category;
      setField("categories", copyCategoriesValue, setPayload);
    }
  };

  const handleDeleteCategory = (index: number) => {
    const copyCategoriesValue = [...categories.value];
    copyCategoriesValue.splice(index, 1);
    setField("categories", copyCategoriesValue, setPayload);
  };

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Categories</label>
      {categories.value.map((categoryPayload, index) => (
        <div key={categoryPayload.id}>
          <div className={formStyles.containerSelect}>
            <select
              name="categories"
              defaultValue={categoryPayload.id}
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
        <button
          type="button"
          title="Add categories"
          onClick={handleAddCategories}
          className={formStyles.buttonPrimary}
        >
          Add categories
        </button>
      )}
    </div>
  );
};

export default Categories;
