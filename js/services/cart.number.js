export function actualizarnumbercart(productCart){
    if (productCart && productCart.length !== undefined) {
      let numbercart = document.querySelector("#numerito");
      numbercart.innerHTML = productCart.length;
  } else {
      console.error("Error: El carrito de productos no está definido o no tiene una propiedad 'length'.");
  }
}