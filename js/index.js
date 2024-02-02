import ProductsFilter from "./components/ProductsFilter.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Header.js";
import RenderProductsTable from "./components/RenderProductsTable.js";
import { setAdminUser } from "./services/setAdminUser.js";
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
const headIndexCss = `<link rel="stylesheet" href="./css/index.css">`;
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
setProducts();
let products;

document.addEventListener("DOMContentLoaded", () => {
  products = getProducts();
  retrievePageTheme();
  title.innerHTML = "HARD-TECH";
  Navbar();
  setAdminUser();
  setProducts();
  Footer();
  head.insertAdjacentHTML("beforeend", headFaviconContent + headIndexCss);
  pagesRenderProductsTable(products);
  ProductsFilter();
  // renderCategoryFilter();
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
const colorSwitch = document.querySelector(
  '.main__colSw input[type="checkbox"]'
);
const switchTheme = (ev) => {
  const arrayTheme = [];
  if (ev.target.checked) {
    document.body.setAttribute("theme", "light");
    arrayTheme.push({ theme: "light" });
  } else {
    document.body.setAttribute("theme", "dark");
    arrayTheme.push({ theme: "dark" });
  }
  localStorage.setItem("pageTheme", JSON.stringify(arrayTheme));
  const valTheme = JSON.parse(localStorage.getItem("pageTheme"));
};
colorSwitch.addEventListener("change", switchTheme);

const retrievePageTheme = () => {
  const retrieveStorage = JSON.parse(localStorage.getItem("pageTheme"));
  const colorSwitchS = document.querySelector(".main__colSwIn");
  const storageTheme =
  retrieveStorage != null ? retrieveStorage[0].theme : "dark";
  const switchStatus = colorSwitchS.checked ? "light" : "dark";
  document.body.setAttribute("theme", storageTheme);
  storageTheme != switchStatus ? colorSwitchS.click() : null;
};
// Hasta aquí Switch cambia-color

// Desde aquí nuevo código para páginacion interna del index

products = JSON.parse(localStorage.getItem("products"));
const productsTable = document.querySelector(".main__productsTable");
const pagesTable = document.querySelector(".main__pagesTable");
const prodPerPage = 9;

const pageFrame = (pageId) => {
  return `<div class="carousel-item"><div class="main__productsTable main__productsTable_page_${pageId}"></div></div>`;
};
const productsTableX = (pageId) => {
  return document.querySelector(`.main__productsTable_page_${pageId}`);
};

export const pagesRenderProductsTable = (productsArray) => {
  let excedentProducts = [...productsArray];
  pagesTable.innerHTML = "";
  console.log(excedentProducts.length > prodPerPage);
  if (excedentProducts.length > prodPerPage) {
    let batchProducts = [];
    let i;
    for (i = 0; excedentProducts.length > prodPerPage; i++) {
      pagesTable.insertAdjacentHTML("beforeend", pageFrame(i));
      batchProducts = [];
      batchProducts = excedentProducts.splice(0, prodPerPage);
      RenderProductsTable(batchProducts, i);
    };
    console.log(i);
    excedentProducts.length != 0
      ? pagesTable.insertAdjacentHTML("beforeend", pageFrame(i))+(RenderProductsTable(excedentProducts, i))
      : null;
    productsTableX(0).parentElement.classList.add("active");
  } else {
    pagesTable.insertAdjacentHTML("beforeend", pageFrame(0));
    productsTableX(0).parentElement.classList.add("active");
    console.log(productsTableX(0).parentElement);
    RenderProductsTable(excedentProducts, 0);
  }
};
