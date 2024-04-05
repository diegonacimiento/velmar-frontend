import React from "react";

const page = ({ params: { id } }: { params: { id: number } }) => {
  return <div>page {id}</div>;
};

export default page;
