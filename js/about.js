import About from "./components/About copy.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];

  About();
  document.addEventListener("DOMContentLoaded", () => {
  head.insertAdjacentHTML("beforeend", headFaviconContent);
  title.innerHTML = "HARD-TECH";
  About();
});


const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})