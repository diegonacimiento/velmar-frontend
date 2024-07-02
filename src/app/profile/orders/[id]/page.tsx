import React from "react";

const page = ({ params: { id } }: { params: { id: number } }) => {
  return <div>Order: {id}</div>;
};

export default page;
