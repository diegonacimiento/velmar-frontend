import React from "react";

interface BasicInputsProps {
  valuesFields: {
    name: string;
    price: number;
    description: string;
  };
  handleChangeValues: (prop: any) => void;
}

const BasicInputs: React.FC<BasicInputsProps> = ({
  valuesFields,
  handleChangeValues,
}) => {
  return (
    <>
      {/* Name input */}
      <label className={`px-1 text-sm font-light mt-2`}>Name</label>
      <input
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        name="name"
        value={valuesFields.name}
        className={`border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
      />

      {/* Price input */}
      <label className={`px-1 text-sm font-light mt-2`}>Price</label>
      <input
        name="price"
        type="number"
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        value={valuesFields.price}
        className={`border rounded-lg border-secondary p-1.5 my-1 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
      />

      {/* Description input */}
      <label className={`px-1 text-sm font-light mt-2`}>Description:</label>
      <textarea
        name="description"
        onChange={(e) =>
          handleChangeValues({ [e.target.name]: e.target.value })
        }
        value={valuesFields.description}
        className={`border rounded-lg border-secondary p-1.5 my-1 h-80 focus:outline-offset-1 focus:outline-1 focus:outline-primary resize-none`}
        maxLength={600}
      />
    </>
  );
};

export default BasicInputs;
