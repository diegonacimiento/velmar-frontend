import React from "react";

import Form from "../../components/Form";
import { getBrand } from "@/services/brands.service";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const brand = await getBrand(id);

  return <Form brand={brand} />;
};

export default page;
