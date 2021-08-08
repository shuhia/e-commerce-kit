import { generateRandomNumber } from "./utils";
import { v4 as uuidv4 } from "uuid";
import productImage1 from "../components/assets/products/product-1.png";
import productImage2 from "../components/assets/products/product-2.png";
import productImage3 from "../components/assets/products/product-3.png";
import productImage4 from "../components/assets/products/product-4.png";
import productImage5 from "../components/assets/products/product-5.png";
import productImage6 from "../components/assets/products/product-6.png";

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
 * @returns {Object} Object with this format: {name, id, img, price, getPrice, quantity, options}.
 */

function generateRandomProduct(
  name = "Spiced Mint Candleaf ®",
  id = uuidv4(),
  img = productImage1,
  price = {
    value: generateRandomNumber(),
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
    getPrice,
    quantity,
  };
}

// Returns an array with random products
/**
 *
 * @param {Number} amount of products.
 * @returns {Array} amount products in array.
 */
function generateRandomProducts(amount) {
  return Array(amount)
    .fill("product")
    .map(() => generateRandomProduct());
}

export { generateRandomProduct, generateRandomProducts };
