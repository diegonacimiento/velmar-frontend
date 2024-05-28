import React from "react";

import { getCategory } from "@/services/categories.service";
import Form from "@/app/categories/components/Form";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const category = await getCategory(id);

  return <Form category={category} />;
};

export default page;
