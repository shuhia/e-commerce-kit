import { randomProduct, randomProducts } from "./utils";

test("create randomProduct", () => {
  const product = randomProduct();
  // Check if all entries contains a value
  const keys = Object(product).keys;
  for (let key in keys) {
    expect(product[key]).toBeDefined();
  }
});

test("create 100 randomProducts with randomProduct()", () => {
  for (let i = 0; i < 100; i++) {
    const product = randomProduct();
    // Check if all entries contains a value
    const keys = Object(product).keys;
    for (let key in keys) {
      expect(product[key]).toBeDefined();
    }
  }
});

test("create 100 randomProducts with randomProducts()", () => {
  const products = randomProducts(100);
  for (let product in products) {
    // Check if all entries contains a value
    const keys = Object(product).keys;
    for (let key in keys) {
      expect(product[key]).toBeDefined();
    }
  }
});
