import { PayloadUpdateProduct, Product } from "@/types/products";

export const validateFormUpdateProduct = (
  payload: Product,
  product: Product
) => {
  let newPayload: any = {};

  // Name input
  if (product.name !== payload.name) {
    newPayload.name = payload.name;
  }

  // Price input
  if (product.price !== payload.price) {
    newPayload.price = payload.price;
  }

  // Description input
  if (product.description !== payload.description) {
    newPayload.description = payload.description;
  }

  // Images input
  if (!compareImagesArrays(payload, product)) {
    newPayload.images = payload.images;
  }

  // Categories input
  if (!compareCategoriesArrays(payload.categories, product.categories)) {
    const categoriesToSend = payload.categories.map((category) => category.id);
    newPayload.categories = categoriesToSend;
  }

  // Brand input
  if (product?.brand?.id !== payload?.brand?.id) {
    newPayload.brand = payload?.brand?.id || null;
  }

  console.log(newPayload);
};

// Other functions

function compareImagesArrays(payload: Product, product: Product) {
  if (product.images.length !== payload.images.length) {
    return false;
  }
  const coloresIguales = product.images.every(
    (image, index) => image.color === payload.images[index].color
  );
  if (!coloresIguales) {
    return false;
  }
  const urlsProduct = product.images.map((image) => image.urls);
  const urlsPayload = payload.images.map((image) => image.urls);

  const firstImage = arraysEqual(urlsPayload[0], urlsProduct[0]);

  if (firstImage === false) {
    return false;
  }

  const secondImage = arraysEqual(urlsPayload[1], urlsProduct[1]);

  if (secondImage === false) {
    return false;
  }
  const thirdImage = arraysEqual(urlsPayload[2], urlsProduct[2]);

  if (thirdImage === false) {
    return false;
  }

  return true;
}

function arraysEqual(arrayPayload: string[], arrayProduct: string[]) {
  let largeArray: string[] = [];
  let smallArray: string[] = [];

  if (arrayPayload?.length > arrayProduct?.length) {
    largeArray = arrayPayload;
    smallArray = arrayProduct;
  } else {
    largeArray = arrayProduct;
    smallArray = arrayPayload;
  }

  const equals = largeArray?.every((url, index) => url === smallArray[index]);

  return equals;
}

function compareCategoriesArrays(
  payloadCategories: Product["categories"],
  productCategories: Product["categories"]
) {
  const productCategoriesIds = productCategories.map((category) => category.id);

  if(productCategoriesIds.length !== payloadCategories.length) {
    return false;
  }

  const sameIds = productCategoriesIds.every((id, index) => id === payloadCategories[index].id);

  return sameIds;
}
