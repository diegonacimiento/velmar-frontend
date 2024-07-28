"use client";
import React, { useEffect, useState } from "react";

import { getOrder } from "@/services/orders.service";
import { IOrder } from "@/types/orders";
import { formatDate } from "@/utils/functions-share";

interface IOrderDetailsProps {
  id: number;
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ id }) => {
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    const get = async () => {
      const response = await getOrder(id);
      setOrder(response);
    };
    get();
  }, [id]);

  return (
    <div className="px-4 py-24 text-secondary">
      {order ? (
        <div className="flex flex-col gap-4 border border-secondary p-4 rounded-md min-w-52">
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
                key={`${product.id} ${product.size}`}
                className="p-2 border-b border-secondary border-opacity-50"
              >
                <h3>- {product.name}</h3>
                <h4 className="ml-4">{product.brand.name}</h4>
                <h4 className="ml-4">$ {product.price}</h4>
                <h4 className="ml-4">x {product.quantity}</h4>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold">Total:</h3> <p>$ {order?.total}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-evenly border border-secondary p-4 rounded-md min-w-52 min-h-96">
          <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
          <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
          <div className="rounded-md w-full h-56 bg-secondary bg-opacity-30 animate-pulse"></div>
          <div className="rounded-md w-full h-4 bg-secondary bg-opacity-30 animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
