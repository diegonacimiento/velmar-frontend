import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ICollection {
  imageUrl: string;
  imageTitle: string;
  smallTitle: string;
  bigTitle: string;
  description: string;
  category?: number;
}

const Collection: React.FC<ICollection> = ({
  imageUrl,
  imageTitle,
  smallTitle,
  bigTitle,
  description,
  category,
}) => {
  return (
    <div className="flex flex-col items-center px-2 rd:flex-row text-secondary">
      <figure className="max-w-520 min-w-screen rd:min-w-80 min-h-600p h-full w-full py-6 sm:p-9 rd:p-12">
        <Image
          className="w-full h-full object-cover"
          width={600}
          height={470}
          src={imageUrl}
          alt={imageTitle}
        />
      </figure>
      <div className="m-auto py-6 sm:p-9 rd:p-12">
        <h5 className="text-xs text-gray-500">{smallTitle}</h5>
        <h3 className="text-4xl font-semibold">{bigTitle}</h3>
        <p className="my-2 font-light">{description}</p>
        <Link href={`/products?categories=${category}`}>
          <button
            type="button"
            title="See collection"
            className="p-4 my-4 h-16 w-max  font-medium text-primary bg-secondary rounded-sm hover:scale-110 hover:bg-primary hover:text-secondary duration-150"
          >
            See collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
