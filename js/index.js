import ProductsFilter from "./components/ProductsFilter.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Header.js";
import { setAdminUser } from "./services/setAdminUser.js";
import { setProducts } from "./services/setProducts.js";
import { getProducts } from "../js/services/getProducts.js";

const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const productsTable = document.querySelector(".main__productsTable");
let products = getProducts()

document.addEventListener("DOMContentLoaded", () => {
  head.insertAdjacentHTML("beforeend", headFaviconContent);
  title.innerHTML = "HARD-TECH";
  Navbar();
  setAdminUser()
  setProducts()
  ProductsFilter()
  loadTable(products);
  Footer();
});

export const loadTable = (objectsArray) => {
  productsTable.innerHTML = "";
  objectsArray.map((product)=> {
    const cardProductFill = `
    <div class="col-11 col-sm-10 text-center mx-auto px-1 shadow-lg">
    <div class="card h-100">
      <div class="card-footer">
        <small class="text-body-secondary"><p class="text-center text-secondary">${product.category}</p></small>
      </div>
      <div class="col-10 mx-auto">
      <img src="${product.image}" class="card-img-top img-fluid" style="max-height: 14rem" alt="Imagen del producto">
      </div>
      <div class="card-body p-1 p-sm-3">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">$ ${product.price}</small>
      </div>
    </div>
    </div>`
  productsTable.insertAdjacentHTML("beforeend", cardProductFill)
  })
}