const ProductCard = (product) => {
    return `<div class="col col-11 col-sm-10 text-center mx-auto px-1 shadow-lg">
    <div class="card h-100">
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
export default ProductCard;