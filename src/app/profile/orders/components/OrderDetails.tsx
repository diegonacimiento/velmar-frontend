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
      console.log(response);
    };
    get();
  }, [id]);

  return (
    <div>
      <h2>Date: {order ? formatDate(order?.createdAt) : ""}</h2>
      <h3>Status: {order?.status}</h3>
      {order?.products?.map((product) => (
        <div key={product.productId}>
          <h3>{product.name}</h3>
          <h4>$ {product.price}</h4>
          <h4>{product.quantity}</h4>
          <h4>{product.brand.name}</h4>
        </div>
      ))}
      <h3>Total: $ {order?.total}</h3>
    </div>
  );
};

export default OrderDetails;
