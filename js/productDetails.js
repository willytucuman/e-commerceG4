
const url = "https://fakestoreapi.com/products";
const getProducts = async () => {
    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error("Error al cargar el archivo: ${response.statusText}");
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return null;
    }
};

const idProductoBuscado = 4;
const mostrarProductoPorId = async (idProducto) => {
    try {
        const products = await getProducts();
        console.log(products)
        if (!products) {
            console.log('No se pudieron cargar los productos.');
            return;
        }
        const productoEspecifico = products.find(producto => producto.id == idProducto);
        console.log(productoEspecifico)
        console.log(productoEspecifico.title)
        const elementoAMostrar = document.getElementById('productDetail')
                    const contenidoHTML = `
                    <section class="py-5 bg-black">
                    <div class="container">
                        <div class="row gx-5">
                            <aside class="col-lg-6">
                            <div class="bg-black rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="#">
                                <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" src="../assets/img/gabinete.png"/>
                                </a>
                            </div>
                            </aside>
                            <main class="col-lg-6">
                            <div class="ps-lg-3">
                                <h4 class="title text-white">
                                ${productoEspecifico.title} <br/>
                                </h4>
                                <div class="d-flex flex-row my-3">
                                    <span class="text-success ms-2">In stock</span>
                                    <span class="text-white"><i class="bi bi-bag mx-1"></i>154</span>
                                </div>
                                <div class="mb-3">
                                    <span class="text-secondary"><strong>Precio</strong></span>
                                    <span class="h5 text-white"><strong>${productoEspecifico.price}<strong></span>
                                </div>
                                <p class="text-white">
                                    DESCRIPCION
                                </p>
                                <div class="row">
                                    <dt class="col-3 text-secondary">categoria:</dt>
                                    <dd class="col-9 text-white"><strong>${productoEspecifico.category}</strong></dd>
                                    <dt class="col-3 text-secondary">marca</dt>
                                    <dd class="col-9 text-white"><strong>${productoEspecifico.marca}</strong></dd>
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
                                    <p>
                                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    </p>
                                    <div class="row mb-2">
                                    <div class="col-12 col-md-6">
                                        <ul class="list-unstyled mb-0">
                                        <li><i class="bi bi-check-lg text-success me-2"></i></i>Some great feature name here</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Optical heart sensor</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-md-6 mb-0">
                                        <ul class="list-unstyled">
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Easy fast and ver good</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Some great feature name here</li>
                                        <li><i class="bi bi-check-lg text-success me-2"></i>Modern style and design</li>
                                        </ul>
                                    </div>
                                    </div>
                                    <table class="table table-dark table-striped mt-3 mb-2">
                                    <tr>
                                        <th class="py-2">Display:</th>
                                        <td class="py-2">13.3-inch LED-backlit display with IPS</td>
                                    </tr>
                                    <tr>
                                        <th class="py-2">Processor capacity:</th>
                                        <td class="py-2">2.3GHz dual-core Intel Core i5</td>
                                    </tr>
                                    <tr>
                                        <th class="py-2">Memory</th>
                                        <td class="py-2">8 GB RAM or 16 GB RAM</td>
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
                                    <h5 class="card-title text-center mb-3 ">Articulos Similares</h5>
                                    <div class="d-flex mb-3 similarHover">
                                    <a href="./404.html" class="me-3 ">
                                        <img src="../assets/img/teclado.png" style="min-width: 96px; height: 96px;" class="img-md w-100" />
                                    </a>
                                    <div class="info ">
                                        <a href="./404.html" class="nav-link mb-1">
                                        Teclado Xpg Gaming Red Switch Winter <br />
                                        </a>
                                        <strong class="text-white"> $85.960,00</strong>
                                    </div>
                                    </div>
                    
                                    <div class="d-flex mb-3 similarHover">
                                    <a href="./404.html" class="me-3">
                                        <img src="../assets/img/gabinete.png" style="min-width: 96px; height: 96px;" class="img-md w-100 " />
                                    </a>
                                    <div class="info">
                                        <a href="./404.html" class="nav-link mb-1">
                                        Gabinete Senty k20 Super <br />
                                        
                                        </a>
                                        <strong class="text-white"> $82.980,00</strong>
                                    </div>
                                    </div>
                    
                                    <div class="d-flex mb-3 similarHover">
                                    <a href="./404.html" class="me-3">
                                        <img src="../assets/img/placaVideo.png" style="min-width: 96px; height: 96px;" class="img-md" />
                                    </a>
                                    <div class="info">
                                        <a href="./404.html" class="nav-link mb-1"> Placa video RTX 3080 8GB </a>
                                        <strong class="text-white"> $1.235.000.00</strong>
                                    </div>
                                    </div>
                    
                                    <div class="d-flex similarHover">
                                    <a href="./404.html" class="me-3">
                                        <img src="../assets/img/silla.png" style="min-width: 96px; height: 96px;" class="img-md" />
                                    </a>
                                    <div class="info">
                                        <a href="./404.html" class="nav-link mb-1"> Silla Gamer Ergonomica Reclinable </a>
                                        <strong class="text-white"> $162.350,90</strong>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </section>
                    `;
        elementoAMostrar.innerHTML=contenidoHTML
    } catch (error) {
        console.error('Error al mostrar el producto:', error);
    }
    const btnRestar = document.querySelector("#btnRestar")
const btnSumar = document.querySelector("#btnSumar")
const Quantity = document.querySelector("#productQuantity")
console.log(Quantity.value)

const sumar = () => {
    let valor = parseInt(Quantity.value);
    if(valor<10){
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
mostrarProductoPorId(idProductoBuscado);




