import { randomNumber } from "./utils";
import { v4 as uuidv4 } from "uuid";
import productImg from "../images/product-1.png";

/**
 * Summary: Creates a random product.
 *
 * Description: This function uses uuid to generate an id.
 *
 * @param {String} name Products name.
 * @param {Number} id Products ID.
 * @param {Object} img Products Img.
 * @param {Object} price The price of the product: {value:Number, currency:String}.
 * @param {Function} getPrice Returns the price of the product in string.
 * @param {Number} quantity The amount of the product.
 * @param {Object} options Any properties that are not implemented.
 * @returns {Object} Object with this format: {name, id, img, price, quantity, options}.
 */

function randomProduct(
  name = "Spiced Mint Candleaf ®",
  id = uuidv4(),
  img = { productImg },
  price = {
    value: randomNumber(),
    currency: "$",
  },
  getPrice = function () {
    return this.price.value + this.price.currency;
  },
  quantity = 1,
  options = []
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
