import React, { Dispatch, SetStateAction } from "react";

import { IPayload } from "../Form";
import { IBrand } from "@/types/brands";
import { formStyles } from "../../styles/FormStyles";
import { setField } from "../../utils/validate-form";
import { MdOutlineDelete } from "react-icons/md";

interface IBrandProps {
  brand: IPayload["brand"];
  setPayload: Dispatch<SetStateAction<IPayload>>;
  allBrands: IBrand[];
}

const Brand: React.FC<IBrandProps> = ({ brand, setPayload, allBrands }) => {
  const handleSelectBrand = (id: string) => {
    const brand = allBrands.find((brand) => brand.id === Number(id));

    if (brand) {
      setField("brand", brand, setPayload);
    }
  };

  const handleAddBrand = () => {
    setField("brand", allBrands[0], setPayload);
  };

  const handleDeleteBrand = () => {
    setField("brand", null, setPayload);
  };

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Brand</label>

      {brand.value && (
        <div className={formStyles.containerSelect}>
          <select
            name="brands"
            defaultValue={brand.value.id}
            onChange={(event) => handleSelectBrand(event.target.value)}
            className={formStyles.select}
          >
            {allBrands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            title="Delete brand"
            onClick={handleDeleteBrand}
            className={formStyles.buttonDelete}
          >
            <MdOutlineDelete />
          </button>
        </div>
      )}

      {!brand.value && (
        <button
          type="button"
          title="Add brand"
          onClick={handleAddBrand}
          className={formStyles.buttonPrimary}
        >
          Add brand
        </button>
      )}

      <p className={formStyles.error}></p>
    </div>
  );
};

export default Brand;
