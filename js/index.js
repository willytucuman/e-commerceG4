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
let products;

document.addEventListener("DOMContentLoaded", () => {
  retrievePageTheme();
  title.innerHTML = "HARD-TECH";
  Navbar();
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
  console.log(valTheme[0].theme)
}
colorSwitch.addEventListener("change", switchTheme);
// Hasta aquí Switch cambia-color

const retrievePageTheme = () => {
  const valueTheme = JSON.parse(localStorage.getItem("pageTheme"))[0].theme;
  document.body.setAttribute("theme", valueTheme);
  let checkAtributte = document.querySelector(".main__colSwIn")
  let temporal;
  checkAtributte.checked ? temporal="light" : temporal="dark";
  valueTheme!=temporal ? checkAtributte.click() : null
  // valueTheme == "dark" ? checkAtributte=false : checkAtributte=true
  // console.log(checkAtributte)
  // switchTheme;
};