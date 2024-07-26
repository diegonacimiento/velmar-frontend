import { IPayloadCreateProduct, IProduct, Size } from "@/types/products";

export const prepareUpdatePayload = (
  payload: IPayloadCreateProduct,
  product: IProduct
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
  if (!compareCategoriesArrays(payload.categoriesIds, product.categories)) {
    newPayload.categoriesIds = payload.categoriesIds;
  }

  // Brand input
  if (product?.brand?.id !== payload?.brandId) {
    newPayload.brandId = payload?.brandId || null;
  }

  return newPayload;
};

// Other functions

function compareImagesArrays(
  payload: IPayloadCreateProduct,
  product: IProduct
) {
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

  const firstSizes = arraysEqual(
    payload?.images[0]?.sizes,
    product?.images[0]?.sizes
  );

  if (firstSizes === false) {
    return false;
  }

  const secondImage = arraysEqual(urlsPayload[1], urlsProduct[1]);

  if (secondImage === false) {
    return false;
  }

  const secondSizes = arraysEqual(
    payload?.images[1]?.sizes,
    product?.images[1]?.sizes
  );

  if (secondSizes === false) {
    return false;
  }

  const thirdImage = arraysEqual(urlsPayload[2], urlsProduct[2]);

  if (thirdImage === false) {
    return false;
  }

  const thirdSizes = arraysEqual(
    payload?.images[2]?.sizes,
    product?.images[2]?.sizes
  );

  if (thirdSizes === false) {
    return false;
  }

  return true;
}

function arraysEqual(
  arrayPayload: string[] | Size[],
  arrayProduct: string[] | Size[]
) {
  let largeArray: string[] | Size[] = [];
  let smallArray: string[] | Size[] = [];

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
  payloadCategories: IPayloadCreateProduct["categoriesIds"],
  productCategories: IProduct["categories"]
) {
  const productCategoriesIds = productCategories.map((category) => category.id);

  if (productCategoriesIds.length !== payloadCategories.length) {
    return false;
  }

  const sameIds = productCategoriesIds.every(
    (id, index) => id === payloadCategories[index]
  );

  return sameIds;
}
