"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

import { getOrder } from "@/services/orders.service";
import { IOrder } from "@/types/orders";
import { formatDate } from "@/utils/functions-share";

interface IOrderDetailsProps {
  id: number;
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ id }) => {
  const router = useRouter();

  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    const get = async () => {
      const response = await getOrder(id);
      setOrder(response);
    };
    get();
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col">
      <div className="pt-6 sm:pt-12 min-w-72">
        <button
          type="button"
          title="Back"
          onClick={handleBack}
          className="flex justify-center items-center gap-1 py-3 w-max rounded-md text-secondary hover:scale-105 duration-150"
        >
          <IoMdArrowRoundBack />
          Back
        </button>
      </div>

      <div className="px-4 pb-12 sm:pb-24 text-secondary">
        {order ? (
          <div className="flex flex-col gap-4 border border-secondary p-4 rounded-md min-w-64">
            <h2 className="font-semibold">
              {order ? formatDate(order?.createdAt) : ""}
            </h2>
            <div className="flex gap-2">
              <h3 className="font-semibold">Status:</h3> <p>{order?.status}</p>
            </div>
            <div>
              <h3>Products:</h3>
              {order?.products?.map((product) => (
                <div
                  key={`${product.id} ${product.size} ${product.color}`}
                  className="p-2 border-b border-secondary border-opacity-50"
                >
                  <h3>- {product.name}</h3>
                  <h4 className="ml-4">Brand: {product.brand.name}</h4>
                  <h4 className="ml-4">Size: {product.size}</h4>
                  <div className="ml-4 flex items-center gap-1">
                    Color:{" "}
                    <div
                      style={{ backgroundColor: product.color }}
                      className="h-3 w-3 rounded-full"
                    ></div>
                  </div>
                  <h4 className="ml-4">Price: $ {product.price}</h4>
                  <h4 className="ml-4">Quantity: {product.quantity}</h4>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <h3 className="font-semibold">Total:</h3> <p>$ {order?.total}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 justify-evenly border border-secondary p-4 rounded-md min-w-64 min-h-[26rem]">
            <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
            <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
            <div className="rounded-md w-full h-56 bg-secondary bg-opacity-30 animate-pulse"></div>
            <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
