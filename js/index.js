import ProductsFilter from "./components/ProductsFilter.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Header.js";
import RenderProductsTable from "./components/RenderProductsTable.js";
import { setAdminUser } from "./services/setAdminUser.js";
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
import { actualizarnumbercart } from "./services/cart.number.js";
const headIndexCss = `<link rel="stylesheet" href="./css/index.css">`;
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
let products;

document.addEventListener("DOMContentLoaded", () => {
  retrievePageTheme();
  title.innerHTML = "HARD-TECH";
  Navbar();
  actualizarnumbercart(productCart)
  setAdminUser();
  setProducts();
  products = getProducts();
  ProductsFilter();
  RenderProductsTable(products);
  Footer();
  head.insertAdjacentHTML("beforeend", headFaviconContent + headIndexCss);
});

const contentX = `<div class="container">
<nav class="row row-cols-1">
    <div class="col col-auto mx-auto">
        <ul class="pagination pagination-sm">
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="prev"> &laquo; </a>
            </li>
            <li class="page-item mx-1 mx-sm-3 active">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#">1</a>
            </li>
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#">2</a>
            </li>
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#">3</a>
            </li>
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#">4</a>
            </li>
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#">5</a>
            </li>
            <li class="page-item mx-1 mx-sm-3">
                <a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="next">&raquo;</a>
            </li>
        </ul>
    </div>  
</nav>
</div>`;
const cardsContainer = document.querySelector(".main__cardsContainer");
cardsContainer.insertAdjacentHTML("afterend", contentX);

// console.log(inputCategoryFilter.parentNode.innerHTML)

// Desde aquí Switch cambia-color
const colorSwitch = document.querySelector('.main__colSw input[type="checkbox"]');
const switchTheme = (ev) => {
  const arrayTheme = [];
  if (ev.target.checked) {
    document.body.setAttribute("theme", "light");
    arrayTheme.push({ theme : "light" });
  } else {
    document.body.setAttribute("theme", "dark");
    arrayTheme.push({ theme : "dark" });
  }
  localStorage.setItem("pageTheme", JSON.stringify(arrayTheme));
  const valTheme = JSON.parse(localStorage.getItem("pageTheme"));
}
colorSwitch.addEventListener("change", switchTheme);
// Hasta aquí Switch cambia-color

const retrievePageTheme = () => {
  const retrieveStorage = JSON.parse(localStorage.getItem("pageTheme"));
  const colorSwitchS = document.querySelector(".main__colSwIn")
  const storageTheme = (retrieveStorage != null) ? retrieveStorage[0].theme : "dark";
  const switchStatus = colorSwitchS.checked ? "light" : "dark";
  document.body.setAttribute("theme", storageTheme);
  storageTheme!=switchStatus ? colorSwitchS.click() : null
};

let productCart = JSON.parse(localStorage.getItem("productCart"));


// products = JSON.parse(localStorage.getItem("products"))
// // console.log(products);
// const productsTable = document.querySelector(".main__productsTable");
// const pagesTable = document.querySelector(".main__pagesTable");
// const excedentProd = [...products];
// const prodPerPage = 4;
// const batchProd = excedentProd.splice(0, prodPerPage-1);
// // console.log(excedentProd);
// // console.log(batchProd);

// const pageFrame = (pageId) => {
//   return `<div class="carousel-item"><div class="main__productsTable main__productsTable_page_${pageId}"></div></div>`
// }
// const productsTableX = (pageId) => {
//   return document.querySelector(`.main__productsTable_page_${pageId}`);
// }


// const pagesRenderProductsTable = (productsArray) => {
//   pagesTable.innerHTML = "";
//   if(productsArray.length > prodPerPage) {
  
//   } else {
//     pagesTable.insertAdjacentHTML("beforeend", pageFrame(1));
//     RenderProductsTable(productsArray, 1);
//   }
// };


