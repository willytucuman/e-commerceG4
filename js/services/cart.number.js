export function actualizarnumbercart(productCart){
    if (productCart && productCart.length !== undefined) {
      let numbercart = document.querySelector("#numerito");
      numbercart.innerHTML = productCart.length;
  }
}