const productsTable = document.querySelector(".main__productsTable");
const ProductCard = (product) => {
    return `<div class="col col-11 col-sm-10 text-center mx-auto shadow-lg">
    <div class="main__productCard card h-100">
      <div class="card-footer p-0">
        <small class="text-body-secondary"><p class="text-center text-secondary m-0 p-0">${product.category.trim().charAt().toUpperCase()+product.category.slice(1)}</p></small>
      </div>
      <div class="col-10 mx-auto">
      <img src="${product.image}" class="main__productImage card-img-top img-fluid object-fit-contain" alt="Imagen del producto">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-body-secondary">$ ${product.price}</small>
      </div>
    </div>
    </div>`
};

const RenderProductsTable = (productsArray) => {
  productsTable.innerHTML = "";
  productsTable.classList.value =`row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4 justify-content-center`;
  productsArray.map((product)=> {
    productsTable.insertAdjacentHTML("beforeend", ProductCard(product))
  })
};
export default RenderProductsTable;