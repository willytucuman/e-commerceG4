import {setAdminUser} from "../js/services/setAdminUser.js"
import { setProducts } from "./services/setProducts.js";
import {getProducts} from "./services/getProducts.js"
import productCards from "./components/productCards.js";
import Navbar from "./components/NavBar.js";

// const searchInput = document.getElementById("searchInput");
// const categorySelect = document.getElementById("categorySelect");
let products;

document.addEventListener("DOMContentLoaded",()=>{
  Navbar();
  setAdminUser();   
  
    
    // setProducts();
    // products = getProducts()
    // renderProductCards(products)
})
const cardContainer = document.getElementById("cardContainer");
const renderProductCards = (products) => {
    cardContainer.innerHTML = "";
    products.map((product) => {
      (product.visible? cardContainer.innerHTML += productCards(product) : null)
    })
};
  