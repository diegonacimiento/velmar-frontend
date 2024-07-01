"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

import { getOrders } from "@/services/orders.service";
import { IOrder } from "@/types/orders";
import { formatDate } from "@/utils/functions-share";
import Link from "next/link";

const OrderList = () => {
  const [orders, setOrders] = useState<IOrder[]>();

  useEffect(() => {
    const get = async () => {
      const response = await getOrders();
      setOrders(response);
    };
    get();
  }, []);

  console.log(orders);

  return (
    <div className="p-4 flex flex-col flex-wrap gap-6 items-center min-h-[30rem]">
      <h2 className="text-secondary text-2xl font-semibold">Your orders</h2>
      <div className="flex flex-wrap gap-6 justify-center py-24 border border-primary rounded-md bg-gradient-radial from-primary to-body max-w-650">
        {orders?.map((order) => (
          <Link
            href={`/orders/${order.id}`}
            key={order.id}
            className="flex flex-col items-center p-2 border rounded-md border-secondary h-32 text-secondary hover:scale-105 hover:opacity-80 hover:bg-secondary hover:bg-opacity-20 duration-150"
          >
            <HiOutlineDocumentText className="h-full text-3xl" />
            <h3>{formatDate(order.createdAt)}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
