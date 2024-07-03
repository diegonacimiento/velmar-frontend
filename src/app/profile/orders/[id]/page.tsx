import React from "react";

const page = ({ params: { id } }: { params: { id: number } }) => {
  console.log(id);
  return <div>Order: {id}</div>;
};

export default page;
