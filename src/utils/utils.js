import { generateRandomProduct, generateRandomProducts } from "./product";

function replaceItemIn(array, newItem) {
  return array.map((prev) => (prev.id === newItem.id ? newItem : prev));
}

function generateRandomNumber(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function getRandomElement(array) {
  const length = array.length;
  return array[generateRandomNumber(length - 1)];
}

export {
  generateRandomNumber,
  generateRandomProduct,
  generateRandomProducts,
  replaceItemIn,
  getRandomElement,
};
