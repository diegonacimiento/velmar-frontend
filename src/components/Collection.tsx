import React from "react";
import Image from "next/image";

interface ICollection {
  imageUrl: string;
  imageTitle: string;
  smallTitle: string;
  bigTitle: string;
  description: string;
}

const Collection: React.FC<ICollection> = ({
  imageUrl,
  imageTitle,
  smallTitle,
  bigTitle,
  description,
}) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <figure className="max-w-520 min-w-screen sm:min-w-80 min-h-600p w-full p-6 sm:p-12">
        <Image
          className="w-full h-full object-cover"
          width={600}
          height={470}
          src={imageUrl}
          alt={imageTitle}
        />
      </figure>
      <div className="m-auto p-6 sm:p-12">
        <h5 className="text-xs text-gray-500">{smallTitle}</h5>
        <h3 className="text-4xl font-semibold">{bigTitle}</h3>
        <p className="my-2 font-light">{description}</p>
        <button
          type="button"
          title="See Romanoff collection"
          className="p-4 my-4 h-16 w-max  font-medium text-primary bg-secondary rounded-sm hover:scale-110 hover:bg-primary hover:text-secondary duration-150"
        >
          See collection
        </button>
      </div>
    </div>
  );
};

export default Collection;
