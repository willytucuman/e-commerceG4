import { formatCurrency } from "../utils/formatCurrency.js";

const productsTableX = (pageId) => {
  return document.querySelector(`.main__productsTable_page_${pageId}`);
}
const ProductCard = (product) => {
  return `<div class="col col-11 col-sm-10 text-center mx-auto" onclick="location.href='./views/detailProduct.html#${
    product.id
  }';">
    <div class="main__productCard card h-100">
      <div class="card-footer p-0">
        <small class="text-body-secondary text-reset"><p class="text-center text-secondary m-0 p-0 h6 text-reset">${
          product.category.trim().charAt().toUpperCase() +
          product.category.slice(1)
        }</p></small>
      </div>
      <div class="col-10 mx-auto">
      <img src="${
        product.image
      }" class="main__productImage card-img-top img-fluid object-fit-contain" alt="Imagen del producto">
      </div>
      <div class="card-body text-center row align-items-center">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text h6">${product.description}</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-body-secondary text-reset h4">${formatCurrency(product.price)}</small>
      </div>
    </div>
    </div>`;
};

const RenderProductsTable = (productsArray, pageId) => {
  console.log(productsArray)
  console.log(pageId)
  productsTableX(pageId).innerHTML = "";
  productsTableX(pageId).classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-3", "row-cols-xxl-4", "g-4", "justify-content-center");
  console.log(productsTableX(pageId))
  productsArray.forEach((product) => {
    productsTableX(pageId).insertAdjacentHTML("beforeend", ProductCard(product));
  });
};
export default RenderProductsTable;
