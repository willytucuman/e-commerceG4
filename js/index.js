import Footer from "./components/Footer.js";
import Navbar from "./components/Header.js";
import { setAdminUser } from "./services/setAdminUser.js";
import { setProducts } from "./services/setProducts.js";

const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;


document.addEventListener("DOMContentLoaded", () => {
    setAdminUser()
    setProducts()
    head.insertAdjacentHTML("beforeend", headFaviconContent);
    title.innerHTML = "HARD-TECH";
    Navbar();
    Footer();
});
