import ProductsFilter from "./components/ProductsFilter.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Header.js";
import RenderProductsTable from "./components/RenderProductsTable.js";
import Paginator from "./components/Paginator.js";
import { setAdminUser } from "./services/setAdminUser.js";
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
import { actualizarnumbercart } from "./services/cart.number.js";
const headIndexCss = `<link rel="stylesheet" href="./css/index.css">`;
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
setProducts();
let products;
let productCart = JSON.parse(localStorage.getItem("productCart"));

document.addEventListener("DOMContentLoaded", () => {
  products = getProducts();
  retrievePageTheme();
  title.innerHTML = "HARD-TECH";
  Navbar();
  actualizarnumbercart(productCart)
  setAdminUser();
  setProducts();
  Footer();
  head.insertAdjacentHTML("beforeend", headFaviconContent + headIndexCss);
  Paginator(products, 10);
  ProductsFilter();
});

const colorSwitch = document.querySelector('.main__colSw input[type="checkbox"]');
const switchTheme = (e) => {
  const arrayTheme = [];
  if (e.target.checked) {
    document.body.setAttribute("theme", "light");
    arrayTheme.push({ theme: "light" });
  } else {
    document.body.setAttribute("theme", "dark");
    arrayTheme.push({ theme: "dark" });
  }
  localStorage.setItem("pageTheme", JSON.stringify(arrayTheme));
};
colorSwitch.addEventListener("change", switchTheme);

const retrievePageTheme = () => {
  const retrieveStorage = JSON.parse(localStorage.getItem("pageTheme"));
  const colorSwitchS = document.querySelector(".main__colSwIn");
  const storageTheme =
    retrieveStorage != null ? retrieveStorage[0].theme : "dark";
  const switchStatus = colorSwitchS.checked ? "light" : "dark";
  document.body.setAttribute("theme", storageTheme);
  storageTheme!=switchStatus ? colorSwitchS.click() : null
};
