"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineError, MdOutlineSecurity } from "react-icons/md";

import { deleteProduct } from "@/services/products.service";
import { TRole } from "@/types/context";

interface IOptionsButtons {
  id: number;
  isProtected: boolean;
  role: TRole;
}

const OptionsButtons: React.FC<IOptionsButtons> = ({
  id,
  isProtected = false,
  role,
}) => {
  const router = useRouter();

  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [disabledBt, setDisabledBt] = useState<boolean>(
    isProtected && role !== "superadmin"
  );

  const goUpdateProduct = () => {
    router.push(`/products/update/${id}`);
  };

  const handleDeleteProduct = async () => {
    try {
      setDisabledBt(true);
      await deleteProduct(id);
      router.push("/products");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("An error occurred, please try again");
    } finally {
      setDisabledBt(false);
    }
  };

  const handleButtonDelete = () => {
    setMessage("Are you sure you want to delete the product?");
    setError("");
  };

  const handleButtonNo = () => {
    setMessage("");
  };

  if (message) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">{message}</p>
        <div className="flex gap-8">
          <button
            type="button"
            title="No"
            onClick={handleButtonNo}
            className="border-2 border-primary p-3 w-20 bg-primary rounded-lg text-lg font-semibold text-secondary hover:scale-105 hover:bg-secondary hover:text-primary duration-150"
          >
            No
          </button>
          <button
            type="button"
            title="Yes"
            onClick={handleDeleteProduct}
            disabled={disabledBt}
            className={
              "border-2 border-primary p-3 w-20 bg-primary rounded-lg text-lg font-semibold text-secondary hover:scale-105 hover:bg-secondary hover:text-primary duration-150 " +
              (disabledBt && "cursor-not-allowed opacity-40")
            }
          >
            Yes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-8 flex-col sm:flex-row">
        <button
          type="button"
          title="Edit product"
          disabled={disabledBt}
          className={
            "border-2 border-secondary p-3 bg-secondary rounded-lg text-lg font-semibold text-body " +
            (disabledBt
              ? "cursor-not-allowed opacity-40 "
              : " hover:scale-105 hover:bg-primary hover:text-secondary duration-150")
          }
          onClick={goUpdateProduct}
        >
          Edit product
        </button>
        <button
          type="button"
          title="Delete product"
          disabled={disabledBt}
          className={
            "border-2 border-red-700 p-3 bg-red-700 rounded-lg text-lg font-semibold text-body " +
            (disabledBt
              ? "cursor-not-allowed opacity-40 "
              : " hover:scale-105 hover:bg-red-300 hover:text-secondary duration-150")
          }
          onClick={handleButtonDelete}
        >
          Delete product
        </button>
      </div>
      {error && (
        <p className="flex justify-center items-center gap-1 text-red-600">
          <MdOutlineError /> {error}
        </p>
      )}

      {isProtected && (
        <div className="flex gap-1 items-center">
          <MdOutlineSecurity />

          <p>Product protected by administrator</p>
        </div>
      )}

      <p className="font-medium">Do you want to simulate a purchase?</p>
    </div>
  );
};

export default OptionsButtons;
