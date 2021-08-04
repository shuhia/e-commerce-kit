import { randomProduct, randomProducts } from "./product";

function randomNumber(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

export { randomNumber, randomProduct, randomProducts };
