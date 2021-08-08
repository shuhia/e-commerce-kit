import { generateRandomNumber, getRandomElement } from "./utils";
import { v4 as uuidv4 } from "uuid";
import cleanLavender from "../components/assets/products/clean-lavender.png";
import coolBlueberries from "../components/assets/products/cool-blueberries.png";
import fragrantCinnamon from "../components/assets/products/fragrant-cinnamon.png";
import juicyLemon from "../components/assets/products/juicy-lemon.png";
import refreshingClementine from "../components/assets/products/refreshing-clementine.png";
import spicedMint from "../components/assets/products/spiced-mint.png";
import summerCherries from "../components/assets/products/summer-cherries.png";
import sweetStrawBerry from "../components/assets/products/sweet-strawberry.png";

function getRandomProduct() {
  const products = [
    {
      name: "Clean Lavender",
      img: cleanLavender,
    },
    {
      name: "Cool Blueberries",
      img: coolBlueberries,
    },
    {
      name: "Fragrant Cinnamon",
      img: fragrantCinnamon,
    },
    {
      name: "Juicy Lemon",
      img: juicyLemon,
    },
    {
      name: "Refreshing Clementine",
      img: refreshingClementine,
    },
    {
      name: "Spiced Mint",
      img: spicedMint,
    },
    {
      name: "Summer Cherries",
      img: summerCherries,
    },
    {
      name: "Sweet Strawberry",
      img: sweetStrawBerry,
    },
  ];

  return getRandomElement(products);
}

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
  name,
  id = uuidv4(),
  img,
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
  if (name === undefined || img === undefined) {
    const product = getRandomProduct();
    name = product.name;
    img = product.img;
  }

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
