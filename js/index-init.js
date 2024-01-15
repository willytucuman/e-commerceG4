import Footer from "./components/Footer.js";
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("title")[0];
const headFaviconContent = `<link rel="icon" type="image/icon" sizes="" href="./assets/favicon/favicon-red-48px-HT.ico" />`;


document.addEventListener("DOMContentLoaded", () => {
    head.insertAdjacentHTML("beforeend", headFaviconContent);
    title.innerHTML = "HARD-TECH";
    Footer();
});
