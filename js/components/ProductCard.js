const ProductCard = (product) => {
    return `<div class="col col-10">
    <div class="card h-100">
      <div class="card-footer p-0">
        <small class="text-body-secondary"><p class="text-center text-secondary m-0 p-0">${product.category}</p></small>
      </div>
      <div class="">
      <img src="${product.image}" class="card-img-top img-fluid object-fit-contain" style="max-height: 14rem" alt="Imagen del producto">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer text-center">
        <small class="text-body-secondary">$ ${product.price}</small>
      </div>
    </div>
    </div>`
};
export default ProductCard;