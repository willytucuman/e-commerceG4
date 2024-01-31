import Navbar from "./components/Header.js";
import Footer from "./components/Footer.js";
const header = document.querySelector("header");
const head = document.querySelector("head")
const title = document.getElementsByTagName("title")[0];
document.addEventListener("DOMContentLoaded", () => {
    title.innerHTML = "HARD-TECH";
    Navbar();
    Footer();
  });
const randomNum=() =>{
  return Math.floor(Math.random() * 9) + 1;
}
let loop1,
    loop2,
    loop3,
    time = 30,
    i = 0,
    digit3 = document.querySelector(".thirdDigit"),
    digit2 = document.querySelector(".secondDigit"),
    digit1 = document.querySelector(".firstDigit");
loop3 = setInterval(function () {
    if (i > 40) {
        clearInterval(loop3);
        digit3.textContent = 4;
    } else { 
        digit3.textContent = randomNum();
        i++;
    }
}, time);
loop2 = setInterval(function () {
    if (i > 80) {
        clearInterval(loop2);
        digit2.textContent = 0;
    } else {
        digit2.textContent = randomNum();
        i++;
    }
}, time);
loop1 = setInterval(function () {
    if (i > 100) {
        clearInterval(loop1);
        digit1.textContent = 4;
    } else {
        digit1.textContent = randomNum();
        i++;
    }
}, time);
