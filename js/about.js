import Navbar from "./components/Header.js";
import Footer from "./components/Footer.js";

const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  Footer();
})