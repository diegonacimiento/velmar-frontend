import { Size } from "@/types/products";

export const mainColors = [
  "black", // Negro
  "blue", // Azul
  "brown", // Marrón
  "cyan", // Cian
  "gray", // Gris
  "green", // Verde
  "indigo", // Índigo
  "lime", // Lima
  "magenta", // Magenta
  "navy", // Azul marino
  "orange", // Naranja
  "pink", // Rosado
  "purple", // Púrpura
  "red", // Rojo
  "teal", // Verde azulado
  "violet", // Violeta
  "white", // Blanco
  "yellow", // Amarillo
];

export const allSizes: Size[] = [
  Size.XS,
  Size.S,
  Size.M,
  Size.L,
  Size.XL,
  Size["2XL"],
  Size["3XL"],
];

export const orderSizes = (sizes: Size[]) => {
  const positionSize = {} as Record<Size, number>;

  allSizes.forEach((size, index) => {
    positionSize[size] = index;
  });

  return sizes.sort((a, b) => {
    return positionSize[a] - positionSize[b];
  });
};

export const categoriesList = ["Unknown", "T-Shirt", "Shoes", "Men", "Women"];

export const brandsList = [
  "Unknown",
  "Nike",
  "Adidas",
  "Puma",
  "OCN",
  "Calvin Klein",
];
