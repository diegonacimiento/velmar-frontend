"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";

import { getOrders } from "@/services/orders.service";
import { IOrder } from "@/types/orders";
import { formatDate } from "@/utils/functions-share";
import Loading from "@/components/Loading";
import { LIMIT } from "@/utils/constants";

const OrderList = () => {
  const [orders, setOrders] = useState<IOrder[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [noMoreOrders, setNoMoreOrders] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      const response = await getOrders();
      setOrders(response);
    };
    get();
  }, []);

  const handleMoreOrders = async () => {
    if (orders) {
      setLoading(true);
      const response = await getOrders(orders.length);
      setOrders([...orders, ...response]);
      setLoading(false);
      response.length < LIMIT && setNoMoreOrders(true);
    }
  };

  return (
    <div className="p-4 flex flex-col flex-wrap gap-6 items-center min-h-[30rem]">
      <h2 className="text-secondary text-2xl font-semibold">Your orders</h2>
      <div className="flex flex-wrap gap-6 justify-center px-4 py-24 border border-primary rounded-md bg-gradient-radial from-primary to-body max-w-650">
        {orders ? (
          orders.length > 0 ? (
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-6 justify-center">
                {orders.map((order) => (
                  <Link
                    href={`/profile/orders/${order.id}`}
                    key={order.id}
                    className="flex flex-col items-center p-2 border rounded-md border-secondary h-32 text-secondary hover:scale-105 hover:opacity-80 hover:bg-secondary hover:bg-opacity-20 duration-150"
                  >
                    <HiOutlineDocumentText className="h-full text-3xl" />
                    <h3>{formatDate(order.createdAt)}</h3>
                  </Link>
                ))}
              </div>
              <button
                type="button"
                title="More products"
                disabled={loading}
                onClick={handleMoreOrders}
                className={
                  "block p-4 mt-8 self-center w-max min-w-32 text-primary bg-secondary " +
                  (loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-primary hover:text-secondary hover:scale-105 duration-150 ") +
                  (noMoreOrders && "hidden")
                }
              >
                {loading ? <Loading /> : "More orders"}
              </button>
            </div>
          ) : (
            <h3 className="text-secondary">You have no orders</h3>
          )
        ) : (
          [1, 2, 3, 4, 5, 6].map((e) => (
            <div
              key={e}
              className="rounded-md min-w-[11.4475rem] h-32 bg-secondary bg-opacity-30 animate-pulse"
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;
