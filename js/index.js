import Footer from "./components/Footer.js";
import ProductCard from "./components/ProductCard.js";
import Navbar from "./components/Header.js"
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const productsTable = document.querySelector(".main__productsTable");
let products = [];


document.addEventListener("DOMContentLoaded", () => {
  setProducts();
  products = getProducts();
  head.insertAdjacentHTML("beforeend", headFaviconContent);
  title.innerHTML = "HARD-TECH";
  // Navbar();
  Footer();
  renderProductsTable(products);
});


const renderProductsTable = (productsArray) => {
  productsTable.innerHTML = "";
  productsArray.map((product)=> {
    productsTable.insertAdjacentHTML("beforeend", ProductCard(product))
  })
}
