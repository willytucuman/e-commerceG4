import Footer from "./components/Footer.js";
import { getProducts } from "../js/services/getProducts.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const products = getProducts()
const productsTable = document.querySelector(".main__productsTable");

import productsDatabase from "../js/database/products.json" assert { type: "json" }; //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 
localStorage.setItem("products", JSON.stringify(productsDatabase)) //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 

document.addEventListener("DOMContentLoaded", () => {
    head.insertAdjacentHTML("beforeend", headFaviconContent);
    title.innerHTML = "HARD-TECH";
    Footer();
});

const loadTable = (objectsArray) => {
    objectsArray.map((product)=> {
        const cardProductFill = `
        <div class="col-11 col-sm-10 text-center mx-auto px-1 shadow-lg">
          <div class="card h-100 ">
            <div class="card-footer ">
              <small class="text-body-secondary"><p class="text-center text-secondary ">${product.category}</p></small>
            </div>
            <div class="col-10 mx-auto">
            <img src="${product.image}" class="card-img-top" alt="Imagen del producto">
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
loadTable(products);

const inputCategoryFilter = document.querySelector(".main__inputCategoryFilter")
// console.log(inputCategoryFilter.parentNode.innerHTML)

const renderCategoryFilter = () => {
  inputCategoryFilter.innerHTML = ``;
  inputCategoryFilter.insertAdjacentHTML("beforeend", `<option disabled selected hidden class="default" value=""> Filtrar por categoria </option>`)
    
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
