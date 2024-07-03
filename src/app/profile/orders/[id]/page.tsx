import React from "react";

import OrderDetails from "../components/OrderDetails";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  return <OrderDetails id={id} />;
};

export default page;
