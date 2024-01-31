import Navbar from "./components/Header.js";
import Footer from "./components/Footer.js";
import {getProducts} from "./services/getProducts.js"
const incomingId = window.location.href.split('#')[1];

document.addEventListener("DOMContentLoaded", () => {
    Navbar();
    Footer();
});

let products= getProducts()
let stockLimit
const offerItems = products.filter(Items => Items.offer== true)
console.log(offerItems[0].title)


const mostrarProductoPorId = (idProducto) => {
    try {

        if (!products) {
            console.log('No se pudieron cargar los productos.');
            return;
        }
        const productoEspecifico = products.find(producto => producto.id == idProducto);
        const elementoAMostrar = document.getElementById('productDetail')
                    const contenidoHTML = `
                    <section class="py-5 bg-black mt-5">
                    <div class="container">
                        <div class="row gx-5">
                            <aside class="col-lg-6">
                            <div class="bg-transparent rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="#">
                                <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit floatImage" src="${productoEspecifico.image}"/>
                                </a>
                            </div>
                            </aside>
                            <main class="col-lg-6">
                            <div class="ps-lg-3">
                                <h4 class="title text-white text-capitalize text-center fs-1 fw-bold productTittle ">
                                ${productoEspecifico.title} <br/>
                                </h4>
                                <div class="d-flex flex-row my-3">
                                    <span class="text-success ms-2">In stock</span>
                                    <span class="text-white"><i class="bi bi-bag mx-1"></i>${productoEspecifico.stock}</span>
                                </div>
                                <div class="mb-3">
                                    <span class="text-secondary"><strong>Precio</strong></span>
                                    <span class="h5 text-white"><strong>$ ${productoEspecifico.price}<strong></span>
                                </div>
                                <p class="text-white textJustify">
                                    ${productoEspecifico.description}
                                </p>
                                <div class="row">
                                    <dt class="col-3 text-secondary">categoria:</dt>
                                    <dd class="col-9 text-white"><strong>${productoEspecifico.category}</strong></dd>
                                    <dt class="col-3 text-secondary">marca</dt>
                                    <dd class="col-9 text-white"><strong>${productoEspecifico.brand}</strong></dd>
                                </div>
                                <hr />
                                <div class="row mb-4">
                                    <div class="col-md-4 col-6 mb-3">
                                        <label class="mb-2 d-block text-white">
                                        <strong>Cantidad</strong>
                                        </label>
                                        <div class="input-group mb-3" style="width: 170px;">
                                            <button id="btnRestar" type="button" class="btn similarHover border border-danger text-secondary bg-dark">
                                                <i class="bi bi-dash "></i>
                                            </button>
                                        
                                            <input type="" id="productQuantity" class="form-control text-center text-white bg-black border border-danger"   aria-describedby="button-addon1" value="2">
                                            <button id="btnSumar" type="button" class="btn similarHover border border-danger text-secondary bg-dark" >
                                            <i class="bi bi-plus "></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="./404.html" class="btn btn-success shadow-0"> Buy now </a>
                                <a href="./404.html" class="btn similarHover border-dark text-secondary shadow-0"> <i class="bi bi-cart-plus"></i> Add to cart </a>
                                <a href="./404.html" class="btn btn-dark py-2 icon-hover px-3"> <i class="bi bi-heart-fill text-danger"></i> Save </a>
                            </div>
                            </main>
                        </div>
                    </div>
                </section>
            
                <section class="bg-black py-4">
                        <div class="container">
                        <div class="row gx-4">
                            <div class="col-lg-8 mb-4">
                            <div class="border border-dark rounded-2 px-3 py-2 bg-black">
                                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li class="nav-item d-flex" role="presentation">
                                    <a class="nav-link d-flex align-items-center justify-content-center w-100 active bg-danger redColor" id="ex1-tab-1" data-mdb-toggle="pill" href="" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Especificaciones</a>
                                </li>
                                </ul>
                                <div class="tab-content" id="ex1-content">
                                <div class="tab-pane fade show active text-white" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                    <p class="textJustifySpecific">
                                    ${productoEspecifico.description}
                                    </p>
                                    <div class="row mb-2">
                                    <div class="col-12 col-md-6">
                                        <ul class="list-unstyled mb-0">
                                        <li><i class="bi bi-check-lg text-success me-2"></i></i>${productoEspecifico.detail1}</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>${productoEspecifico.detail2}</li>
                                        
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6 mb-0">
                                        <ul class="list-unstyled">
                                        <li><i class="bi bi-check-lg text-success me-2"></i>${productoEspecifico.detail3}</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>${productoEspecifico.detail4}</li>
                                        </ul>
                                    </div>
                                    </div>
                                    <table class="table table-dark table-striped mt-3 mb-2">
                                    <tr>
                                        <th class="py-2">MEDIDAS</th>
                                        <td class="py-2"></td>
                                    </tr>
                                    <tr>
                                        <th class="py-2">Alto</th>
                                        <td class="py-2">${productoEspecifico.size}</td>
                                    </tr>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4">
                            <div class="px-0 border-dark rounded-2 shadow-0">
                                <div class="card border-dark">
                                <div class="card-body bg-dark text-white">
                                    <h5 class="card-title text-center mb-3 ">Nuestras Ofertas</h5>
                                    ${
                                        products.filter(product => product.offer === true).map(product => (`
                                            <div class="d-flex mb-3 similarHover" onclick="location.href='#${
                                                product.id
                                            }';location.reload()" >
                                                <div class="me-3">
                                                <img  src=${product.image} style="min-width: 96px; height: 96px;" class="img-md w-100" />
                                                </div>
                                                <div class="info">
                                                <div  class="nav-link mb-1" >
                                                    ${product.title} <br />
                                                </div>
                                                <strong class="text-success"> $ ${product.price}</strong>
                                                </div>
                                            </div>
                                        `)).join('')
                                    }

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </section>
                    `;
                    stockLimit = productoEspecifico.stock
        elementoAMostrar.innerHTML=contenidoHTML
    } catch (error) {
        console.error('Error al mostrar el producto:', error);
    }
    const refreshBtn = document.querySelector("#refresh")
    const btnRestar = document.querySelector("#btnRestar")
const btnSumar = document.querySelector("#btnSumar")
const Quantity = document.querySelector("#productQuantity")


const sumar = () => {
    let valor = parseInt(Quantity.value);
    if(valor<stockLimit){
        Quantity.value = valor + 1;
    }
}
const restar = () => {
    let valor = parseInt(Quantity.value);
    if (valor > 0) {
        Quantity.value = valor - 1;
    }
}
btnSumar.addEventListener("click",sumar)
btnRestar.addEventListener("click",restar)

};
mostrarProductoPorId(incomingId);




