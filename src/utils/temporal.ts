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
  "#af9f8c", // Cremita
  "#9a5b3a", // Marrón claro
];

export const allSizes: Size[] = [
  Size.XS,
  Size.S,
  Size.M,
  Size.L,
  Size.XL,
  Size["2XL"],
  Size["3XL"],
  Size["T-35"],
  Size["T-36"],
  Size["T-37"],
  Size["T-38"],
  Size["T-39"],
  Size["T-40"],
  Size["T-41"],
  Size["T-42"],
  Size["T-43"],
  Size["T-44"],
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
