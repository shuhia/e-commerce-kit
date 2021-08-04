import { randomProduct, randomProducts } from "./product";

function replaceItemIn(array, newItem) {
  return array.map((prev) => (prev.id === newItem.id ? newItem : prev));
}

function randomNumber(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

export { randomNumber, randomProduct, randomProducts, replaceItemIn };
