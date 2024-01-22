import Footer from "./components/Footer.js";
import ProductCard from "./components/ProductCard.js";
import Navbar from "./components/Header.js"
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
const headIndexCss = `<link rel="stylesheet" href="./css/index.css">`;
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const productsTable = document.querySelector(".main__productsTable");
const inputCategoryFilter = document.querySelector(".main__inputCategoryFilter")
let products = getProducts();

document.addEventListener("DOMContentLoaded", () => {
  setProducts();
  head.insertAdjacentHTML("beforeend", headFaviconContent+headIndexCss);
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
};

const renderCategoryFilter = () => {
  const categoryFirstLine = `<option disabled selected hidden class="default" value=""> Filtrar por categoria </option>`;
  inputCategoryFilter.innerHTML = ``;
  inputCategoryFilter.insertAdjacentHTML("beforeend", categoryFirstLine)
    
  const categoryFilter = products.map((prod)=>{
    const cat = prod.category.trim().charAt().toUpperCase()+prod.category.slice(1);
    return cat;
  });
  const categories = [...new Set(categoryFilter)];
  categories.forEach( cat => {
    inputCategoryFilter.insertAdjacentHTML("beforeend", `<option value="${cat}">${cat}</option>`)
  })  
}
renderCategoryFilter()

// console.log(inputCategoryFilter.parentNode.innerHTML)