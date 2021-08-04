import { randomNumber } from "./utils";
import { v4 as uuidv4 } from "uuid";
import productImg from "../images/product-1.png";

/**
 *
 * @param {String} name Products name.
 * @param {Number} id Products ID.
 * @param {Object} img Products Img.
 * @param {Number} price The price of the product.
 * @param {Number} quantity The amount of the product.
 * @returns {Object} Object with follwing keys: name, id, img, price and quantity.
 */

function randomProduct(
  name = "Spiced Mint Candleaf ®",
  id = uuidv4(),
  img = { productImg },
  price = { value: randomNumber(), currency: "$" },
  quantity = 1
) {
  return {
    name,
    id,
    img,
    price,
    quantity,
  };
}

// Returns an array with random products
/**
 *
 * @param {Number} amount of products.
 * @returns {Array} amount products in array.
 */
function randomProducts(amount) {
  return Array(amount)
    .fill("product")
    .map(() => randomProduct());
}

export { randomProduct, randomProducts };
