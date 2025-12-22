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

const PRODUCT_CATALOG = [
  {
    name: "Clean Lavender",
    id: "clean-lavender",
    img: cleanLavender,
    price: { value: 18, currency: "$" },
    description: "A relaxing lavender scent with a clean finish.",
    isFeatured: true,
  },
  {
    name: "Cool Blueberries",
    id: "cool-blueberries",
    img: coolBlueberries,
    price: { value: 16, currency: "$" },
    description: "Sweet summer berries balanced with cool citrus.",
    isFeatured: true,
  },
  {
    name: "Fragrant Cinnamon",
    id: "fragrant-cinnamon",
    img: fragrantCinnamon,
    price: { value: 20, currency: "$" },
    description: "Warm cinnamon and spice for cozy evenings.",
  },
  {
    name: "Juicy Lemon",
    id: "juicy-lemon",
    img: juicyLemon,
    price: { value: 15, currency: "$" },
    description: "Bright lemon zest with a hint of sweetness.",
  },
  {
    name: "Refreshing Clementine",
    id: "refreshing-clementine",
    img: refreshingClementine,
    price: { value: 17, currency: "$" },
    description: "Sun-ripened citrus that instantly refreshes.",
    isFeatured: true,
  },
  {
    name: "Spiced Mint",
    id: "spiced-mint",
    img: spicedMint,
    price: { value: 19, currency: "$" },
    description: "Mint leaves layered with comforting spices.",
  },
  {
    name: "Summer Cherries",
    id: "summer-cherries",
    img: summerCherries,
    price: { value: 16, currency: "$" },
    description: "Ripe cherries blended with soft florals.",
  },
  {
    name: "Sweet Strawberry",
    id: "sweet-strawberry",
    img: sweetStrawBerry,
    price: { value: 15, currency: "$" },
    description: "Fresh-picked strawberries with creamy vanilla.",
  },
];

function getRandomProduct() {
  return getRandomElement(PRODUCT_CATALOG);
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
    if (product.price) {
      price = product.price;
    }
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

function getProductById(id) {
  return PRODUCT_CATALOG.find((product) => product.id === id);
}

function getFeaturedProducts() {
  return PRODUCT_CATALOG.filter((product) => product.isFeatured);
}

export {
  generateRandomProduct,
  generateRandomProducts,
  getProductById,
  getFeaturedProducts,
  PRODUCT_CATALOG,
};
