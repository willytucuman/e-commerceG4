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
  paginator(products, 5);
  ProductsFilter();
});

// Desde aquí Switch cambia-color
const colorSwitch = document.querySelector(
  '.main__colSw input[type="checkbox"]'
);
const switchTheme = (e) => {
  const arrayTheme = [];
  console.log(e.target.value)
  if (e.target.checked) {
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
const cardsContainer = document.querySelector(".main__cardsContainer");
const paginationCtrl = document.querySelector(".main__paginationCtrl");
const paginationFrame = `<div class="row mb-4">
<div id="carouselExample" class="carousel slide">
<div class="carousel main__pagesTable"></div>
</div>
</div>`;

const paginationCtrlFrame = `<div class="container">
<nav class="row row-cols-1">
<div class="col col-auto mx-auto">
<ul class="main__paginationList pagination pagination-sm">
<li class="main__paginationItem main__paginationItem_index_prev page-item mx-1 mx-sm-3">
<a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="prev"> &laquo; </a>
</li>
<li class="main__paginationItem main__paginationItem_index_next page-item mx-1 mx-sm-3">
<a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="next">&raquo;</a>
</li>
</ul>
</div>  
</nav>
</div>`;

const paginationCtrlNumber = (index) => {
  return `<li class="main__paginationItem main__paginationItem_index_${index} page-item mx-1 mx-sm-3">
  <a class="main__paginationText main__paginationText_index_${index} page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide-to="${index}">${
    index + 1
  }</a>
  </li>`;
};

const pageFrame = (pageId) => {
  return `<div class="carousel-item"><div class="main__productsTable main__productsTable_page_${pageId}"></div></div>`;
};
const productsTableX = (pageId) => {
  return document.querySelector(`.main__productsTable_page_${pageId}`);
};

export const paginator = (productsArray, Qty) => {
  console.log(Qty)
  cardsContainer.innerHTML = "";
  cardsContainer.insertAdjacentHTML("afterbegin", paginationFrame);
  let excedentProducts = [...productsArray];
  const pagesTable = document.querySelector(".main__pagesTable");
  pagesTable.innerHTML = "";
  
  if (excedentProducts.length > Qty) {
    paginationCtrl.innerHTML = "";
    paginationCtrl.insertAdjacentHTML("afterbegin", paginationCtrlFrame);
    const paginationCtrlNext = document.querySelector(
      ".main__paginationItem_index_next"
    );
    let batchProducts = [];
    let i;
    for (i = 0; excedentProducts.length > Qty; i++) {
      pagesTable.insertAdjacentHTML("beforeend", pageFrame(i));
      batchProducts = excedentProducts.splice(0, Qty);
      RenderProductsTable(batchProducts, i);
      paginationCtrlNext.insertAdjacentHTML(
        "beforebegin",
        paginationCtrlNumber(i)
      );
    }
    excedentProducts.length != 0
      ? pagesTable.insertAdjacentHTML("beforeend", pageFrame(i)) +
        RenderProductsTable(excedentProducts, i) +
        paginationCtrlNext.insertAdjacentHTML(
          "beforebegin",
          paginationCtrlNumber(i)
        )
      : null;
    productsTableX(0).parentElement.classList.add("active");
  } else {
    paginationCtrl.innerHTML = "";
    pagesTable.insertAdjacentHTML("beforeend", pageFrame(0));
    productsTableX(0).parentElement.classList.add("active");
    RenderProductsTable(excedentProducts, 0);
  }
  const paginationCtrlsList = document.querySelector(".main__paginationList");
  const productsFilter = document.querySelector(".main__productsFilter");
  
  paginationCtrlsList.addEventListener("click", (e) => {
    console.log(e.target)
    
    const prevCtrl = paginationCtrlsList.firstElementChild;
    const nextCtrl = paginationCtrlsList.lastElementChild;
    let listOfCtrls = [...paginationCtrlsList.children];
    console.log(listOfCtrls)
    if(e.target.parentElement==prevCtrl||e.target.parentElement==nextCtrl) {
      document.activeElement.blur();
    } else {
      listOfCtrls.forEach( ctrl => {
        ctrl==nextCtrl||ctrl==prevCtrl ? null
        :(ctrl.classList.remove("active"))+(e.target.parentElement.classList.add("active"))
      });
    }
    productsFilter.scrollIntoView(true);
    console.log(listOfCtrls)
    // const nodesArray = listOfCtrls.map( item => {
    //   if(item.nodeType==1) {
    //     return item
    //   } else {
    //     null
    //   }
    // })
    // console.log(nodesArray)
    
  })
};

// const run = () => {
// };
