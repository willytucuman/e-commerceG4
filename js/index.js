import productsDatabase from "../js/database/products.json" assert { type: "json" }; //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 
localStorage.setItem("products", JSON.stringify(productsDatabase)) //Linea de uso temporal para cargar Json al LocalStorage, se elimina de version final 

import Footer from "./components/Footer.js";
import { getProducts } from "../js/services/getProducts.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;
const productsTable = document.querySelector(".main__productsTable");
let products = getProducts()

document.addEventListener("DOMContentLoaded", () => {
  head.insertAdjacentHTML("beforeend", headFaviconContent);
  title.innerHTML = "HARD-TECH";
  Footer();
});

const loadTable = (objectsArray) => {
  productsTable.innerHTML = "";
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




const inputNameFilter = document.querySelector(".main__inputNameFilter");
const inputCategoryFilter = document.querySelector(".main__inputCategoryFilter");
const btnFilterClear = document.querySelector(".main__btnFilterClear")
const tableMsjNotFound = `<div class="w-100 vh-100 text-center"> <h2 class="text-secondary">Oops, no hay productos que coincidan con su busqueda</h2></div>`;
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


const renderFilteredProducts = (inputName, inputCategory) => {
  console.log(inputName, inputCategory);
  let filteredProducts = nameProductFilter(inputName);
  console.log(filteredProducts);
  filteredProducts = categoryProductFilter(inputCategory, filteredProducts);
  console.log(filteredProducts);
  filteredProducts!="" ? loadTable(filteredProducts) : productsTable.innerHTML = tableMsjNotFound;
}

const nameProductFilter = (inputWord) => {
  products = getProducts();
  let outgoing = [];
  const amendedInputWord = inputWord.toString().toLowerCase().trim();
  if (amendedInputWord == "") {
    outgoing = products
  } else {
    products.forEach( product => {
    const amendedProductName = product.title.toLowerCase();
    amendedProductName.includes(amendedInputWord) ? outgoing.push(product) : null
  })
  }
  console.log(outgoing);
  return outgoing;
};

const categoryProductFilter = (selectedCategory, productArray) => {
  console.log(selectedCategory);
  console.log(productArray);
  const outgoing = productArray.filter((product) => product.category.toLowerCase() == selectedCategory.toLowerCase());
  console.log(outgoing);
  if (selectedCategory) {
    console.log(selectedCategory);
    return outgoing 
  } else {
    return productArray;
  }
};

inputNameFilter.addEventListener("keyup", (e) => {
  renderFilteredProducts(
    e.target.value.toLowerCase(),
    inputCategoryFilter.value.toLowerCase()
  );
  console.log(e.target.value.toLowerCase())
});

inputCategoryFilter.addEventListener("change", (e) => {
  renderFilteredProducts(
    inputNameFilter.value.toLowerCase(),
    e.target.value.toLowerCase()
  );
  console.log(e.target.value.toLowerCase())
});

btnFilterClear.addEventListener("click", (e) => {
  e.preventDefault();
  inputNameFilter.value = "";
  inputCategoryFilter.value = "";
  loadTable(products)
});