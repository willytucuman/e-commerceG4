import RenderProductsTable from "./RenderProductsTable.js";
const cardsContainer = document.querySelector(".main__cardsContainer");
const paginationCtrl = document.querySelector(".main__paginationCtrl");
const paginationFrame = `<div class="row mb-4">
<div id="carouselExample" class="carousel slide">
<div class="carousel main__pagesTable"></div>
</div>
</div>`;

const paginationCtrlFrame = `<div class="container">
<nav class="row row-cols-1">
<div class="col col-auto mx-auto">
<ul class="main__paginationList pagination">
<li class="main__paginationItem main__paginationItem_index_prev page-item mx-1 mx-sm-3 invisible">
<a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="prev"> &laquo; </a>
</li>
<li class="main__paginationItem main__paginationItem_index_next page-item mx-1 mx-sm-3 invisible">
<a class="main__paginationText page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide="next">&raquo;</a>
</li>
</ul>
</div>  
</nav>
</div>`;

const paginationCtrlNumber = (index) => {
  return `<li class="main__paginationItem main__paginationItem_index_${index} page-item mx-1 mx-sm-3">
  <a class="main__paginationText main__paginationText_index_${index} page-link rounded-3 bg-transparent border-0" href="#" data-bs-target="#carouselExample" data-bs-slide-to="${index}">${
    index + 1
  }</a>
  </li>`;
};

const pageFrame = (pageId) => {
  return `<div class="carousel-item"><div class="main__productsTable main__productsTable_page_${pageId}"></div></div>`;
};
const productsTableX = (pageId) => {
  return document.querySelector(`.main__productsTable_page_${pageId}`);
};

const Paginator = (productsArray, Qty) => {
  
  cardsContainer.innerHTML = "";
  cardsContainer.insertAdjacentHTML("afterbegin", paginationFrame);
  let excedentProducts = [...productsArray];
  const pagesTable = document.querySelector(".main__pagesTable");
  pagesTable.innerHTML = "";
  
  if (excedentProducts.length > Qty) {
    paginationCtrl.innerHTML = "";
    paginationCtrl.insertAdjacentHTML("afterbegin", paginationCtrlFrame);
    const paginationCtrlNext = document.querySelector(".main__paginationItem_index_next");
    let batchProducts = [];
    let i;
    for (i = 0; excedentProducts.length > Qty; i++) {
        pagesTable.insertAdjacentHTML("beforeend", pageFrame(i));
        batchProducts = excedentProducts.splice(0, Qty);
        RenderProductsTable(batchProducts, i);
        paginationCtrlNext.insertAdjacentHTML(
            "beforebegin",
            paginationCtrlNumber(i)
            );
        }
        excedentProducts.length != 0
        ? pagesTable.insertAdjacentHTML("beforeend", pageFrame(i))+(RenderProductsTable(excedentProducts, i))+(paginationCtrlNext.insertAdjacentHTML("beforebegin", paginationCtrlNumber(i)))
        : null;
        productsTableX(0).parentElement.classList.add("active");
        run();
    } else {
        paginationCtrl.innerHTML = "";
        pagesTable.insertAdjacentHTML("beforeend", pageFrame(0));
        productsTableX(0).parentElement.classList.add("active");
        RenderProductsTable(excedentProducts, 0);
    }
};
const run = () => {
    const paginationCtrlsList = document.querySelector(".main__paginationList");
    const productsFilter = document.querySelector(".main__productsFilter");
    paginationCtrlsList.addEventListener("click", (e) => {
      const prevCtrl = paginationCtrlsList.firstElementChild;
      const nextCtrl = paginationCtrlsList.lastElementChild;
      let listOfCtrls = [...paginationCtrlsList.children];
      if(e.target.parentElement==prevCtrl||e.target.parentElement==nextCtrl) {
        document.activeElement.blur();
      } else {
        listOfCtrls.forEach( ctrl => {
          ctrl==nextCtrl||ctrl==prevCtrl ? null
          :(ctrl.classList.remove("active"))+(e.target.parentElement.classList.add("active"))
        });
      }
      productsFilter.scrollIntoView(true);   
    });
}
export default Paginator;