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

let products = getProducts();

document.addEventListener("DOMContentLoaded", () => {
  head.insertAdjacentHTML("beforeend", headFaviconContent + headIndexCss);
  title.innerHTML = "HARD-TECH";
  // Navbar();
  setAdminUser();
  setProducts();
  ProductsFilter();
  RenderProductsTable(products);
  Footer();
});

const contentX = `<div>
<nav class="row row-cols-1">
    <div class="col-auto mx-auto mx-lg-0 ms-lg-auto ">
        <ul class="pagination pagination-sm">
            <li class="page-item">
                <a class="page-link" href="#"> &laquo; </a>
            </li>
            <!-- <li class="page-item active">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item disabled">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">5</a>
            </li> -->
            <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
            </li>
        </ul>
    </div>  
</nav>
</div>`;
const cardsContainer = document.querySelector(".main__cardsContainer");
cardsContainer.insertAdjacentHTML("afterbegin", contentX);

document.querySelector(".main__carouselImg").parentNode.addEventListener("change", () => {
  document.querySelector(".main__carouselImg").innerHTML = "y ella"
})

// console.log(inputCategoryFilter.parentNode.innerHTML)
