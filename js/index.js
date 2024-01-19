import productsDatabase from "../js/database/products.json" assert { type: "json" }; //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 
localStorage.setItem("products", JSON.stringify(productsDatabase)) //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 


import { getProducts } from "../js/services/getProducts.js";
const products = getProducts()
console.log(getProducts())
console.log(products)

const productsTable = document.querySelector("#productsTable");

const loadTable = () => {
    products.map((product)=> {
        const cardProductFill = `
        <div class="col ">
        <div class="card h-100">
          <div class="card-footer">
            <small class="text-body-secondary"><p class="text-center text-secondary">${product.category}</p></small>
          </div>
          <div class="">
          <img src="${product.image}" class="card-img-top img-fluid" style="max-height: 14rem" alt="Imagen del producto">
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