import Footer from "./components/Footer.js";
import { getProducts } from "../js/services/getProducts.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const products = getProducts()
const productsTable = document.querySelector("#productsTable");

import productsDatabase from "../js/database/products.json" assert { type: "json" }; //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 
localStorage.setItem("products", JSON.stringify(productsDatabase)) //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 

document.addEventListener("DOMContentLoaded", () => {
    head.insertAdjacentHTML("beforeend", headFaviconContent);
    title.innerHTML = "HARD-TECH";
    Footer();
});

const loadTable = () => {
    products.map((product)=> {
        const cardProductFill = `
        <div class="col-10 text-center mx-auto px-1">
          <div class="card h-100 ">
            <div class="card-footer ">
              <small class="text-body-secondary"><p class="text-center text-secondary ">${product.category}</p></small>
            </div>
            <div class="col-10 mx-auto">
            <img src="${product.image}" class="card-img-top" alt="Imagen del producto">
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">$ ${product.price}</small>
            </div>
          </div>
        </div>`
        productsTable.insertAdjacentHTML("beforeend", cardProductFill)
    })
}
loadTable();
