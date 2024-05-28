import React from "react";
import { LuImagePlus } from "react-icons/lu";

import { formStyles } from "@/app/styles/FormStyles";
import { ICategoryField } from "@/types/categories";
import Slides from "@/components/Slides";

interface IImage {
  categoryFields: ICategoryField;
  toggleGallery: () => void;
}

const Image: React.FC<IImage> = ({ categoryFields, toggleGallery }) => {
  if (categoryFields.image.value) {
    return (
      <>
        <Slides images={[categoryFields.image.value]} />
        <button
          type="button"
          title="Change image"
          onClick={toggleGallery}
          className={formStyles.buttonPS}
        >
          Change image
        </button>
      </>
    );
  } else {
    return (
      <>
        <div
          title="Add images"
          onClick={toggleGallery}
          className={
            "flex items-center justify-center h-100 w-full text-secondary bg-primary text-5xl cursor-pointer hover:bg-opacity-40 duration-150 " +
            (categoryFields.image.error &&
              "border border-red-600 bg-red-300 bg-opacity-30")
          }
        >
          {" "}
          <LuImagePlus />
        </div>

        <p className={formStyles.error}>{categoryFields.image.error}</p>

        <button
          type="button"
          title="Add images"
          onClick={toggleGallery}
          style={{ margin: 0 }}
          className={formStyles.buttonSP}
        >
          Add images
        </button>
      </>
    );
  }
};

export default Image;
