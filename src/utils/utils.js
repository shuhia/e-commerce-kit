import { generateRandomProduct, generateRandomProducts } from "./product";
import faker from "faker";

function getRandomTestimonial() {
  return {
    image: faker.image.avatar(),
    rating: generateRandomNumber(5),
    comment: faker.lorem.sentence(),
    name: getRandomName(),
  };
}

function getRandomName() {
  return faker.name.findName();
}

function replaceItemIn(array, newItem) {
  return array.map((prev) => (prev.id === newItem.id ? newItem : prev));
}

function generateRandomNumberBetween(min = 0, max = 10) {
  return min + Math.floor(Math.random() * max + 1);
}

function generateRandomNumber(max = 10) {
  return Math.floor(Math.random() * max + 1);
}

function getRandomElement(array) {
  const length = array.length;
  return array[generateRandomNumber(length - 1)];
}

function* generatorFunction(array) {
  yield 5;
}

export {
  generateRandomNumber,
  generateRandomProduct,
  generateRandomProducts,
  replaceItemIn,
  getRandomElement,
  getRandomName,
  generateRandomNumberBetween,
  getRandomTestimonial,
};
