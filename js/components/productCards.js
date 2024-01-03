const productCards = (product)=>{
    return `
  <div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
        <p class="card-text">Stock Disponible: ${product.quantity}</p>
        <a href="" class="btn btn-primary">Ver producto</a>
      </div>
  </div>
    `
}
export default productCards