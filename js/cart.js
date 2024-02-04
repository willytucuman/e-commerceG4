import Navbar from "./components/Header.js";
import Footer from "./components/Footer.js";
import { formatCurrency } from "./utils/formatCurrency.js";
import { actualizarnumbercart } from "./services/cart.number.js";
import { getLoggedUser } from "./services/getLoggedUser.js";

let productos_carrito = localStorage.getItem("productCart");

productos_carrito = JSON.parse(productos_carrito);

const contenedor_carrito_vacio = document.querySelector("#carrito-vacio");
const contenedor_carrito_productos =
  document.querySelector("#carrito-productos");
const contenedor_carrito_acciones = document.querySelector("#carrito-acciones");
const contenedor_carrito_comprado = document.querySelector("#carrito-comprado");
let btn_eliminar = document.querySelectorAll(".carrito-producto-eliminar");
const btn_vaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedor_total = document.querySelector("#total");
const btn_comprar = document.querySelector("#carrito-acciones-comprar");

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  actualizarnumbercart(productCart);
  Footer();
});

function cargar_producto_carrito() {
  if (productos_carrito && productos_carrito.length > 0) {
    contenedor_carrito_vacio.classList.add("disabled");
    contenedor_carrito_productos.classList.remove("disabled");
    contenedor_carrito_acciones.classList.remove("disabled");
    contenedor_carrito_comprado.classList.add("disabled");

    contenedor_carrito_productos.innerHTML = "";

    productos_carrito.forEach((productos) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
            <img class="carrito-producto-imagen" src="${
              productos.image
            }" alt="${productos.title}">
            <div class="carrito-producto-titulo">
                <small class="text-light ">Titulo</small>
                <h6 class="text-light">${productos.title}</h6>
            </div>
            <div class="carrito-producto-cantidad">
                <small class="text-light">Cantidad</small>
                <h6 class="text-light">${productos.cantidad}</h6>
            </div>
            <div class="carrito-producto-precio">
                <small  class="text-light">Precio</small>
                <h6 class="text-light">${formatCurrency(productos.price)} </h6>
            </div>
            <div class="carrito-producto-subtotal ocultar">
                <small class="text-light">Subtotal</small>
                <h6 class="text-light">${formatCurrency(
                  productos.price * productos.cantidad
                )}</h6>
            </div>
            <button class="carrito-producto-eliminar" id="${
              productos.id
            }"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg></button>
        `;

      contenedor_carrito_productos.append(div);
    });
  } else {
    contenedor_carrito_vacio.classList.remove("disabled");
    contenedor_carrito_productos.classList.add("disabled");
    contenedor_carrito_acciones.classList.add("disabled");
    contenedor_carrito_comprado.classList.add("disabled");
  }
  actualizar_botones_eliminar();
  actualizar_total();
}

cargar_producto_carrito();

function actualizar_botones_eliminar() {
  btn_eliminar = document.querySelectorAll(".carrito-producto-eliminar");

  btn_eliminar.forEach((boton) => {
    boton.addEventListener("click", eliminar_carrito);
  });
}
function eliminar_carrito(e) {
  Toastify({
    text: "Producto eliminado",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #83827f, #83827f)",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem",
    },
    offset: {
      x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: "1.5rem", // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  const idBtn = e.currentTarget.id;
  const index = productos_carrito.findIndex(
    (productos) => productos.id == idBtn
  );

  productos_carrito.splice(index, 1);
  cargar_producto_carrito();

  localStorage.setItem("productCart", JSON.stringify(productos_carrito));
}

btn_vaciar.addEventListener("click", vaciar_carrito);
function vaciar_carrito() {
  Swal.fire({
    title: "¿Estás seguro?",
    icon: "question",
    html: `Se van a borrar ${productos_carrito.reduce(
      (acc, productos) => acc + productos.cantidad,
      0
    )} productos.`,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      productos_carrito.length = 0;
      localStorage.setItem("productCart", JSON.stringify(productos_carrito));
      cargar_producto_carrito();
      location.reload();
    }
  });
}
function actualizar_total() {
  const total_calculado = productos_carrito.reduce(
    (ac, productos) => ac + productos.price * productos.cantidad,
    0
  );
  total.innerText = `$${total_calculado}`;
}

btn_comprar.addEventListener("click", comprar_carrito);
function comprar_carrito() {
  //lo primero que tiene que hacer es ver si esta logeado si esta logeado puedfe comprar sino tiene que salirle un msj para que se logue
  const userLogged = getLoggedUser();
  if (userLogged == false) {
    Swal.fire({
      title: "No estás logueado",
      icon: "error",
      confirmButtonText: "Ok",
      footer: '<a href="../views/login.html">Inicie Session o Registrese</a>',
    });
  } else {
    productos_carrito.length = 0;
    localStorage.setItem("productCart", JSON.stringify(productos_carrito));

    contenedor_carrito_vacio.classList.add("disabled");
    contenedor_carrito_productos.classList.add("disabled");
    contenedor_carrito_acciones.classList.add("disabled");
    contenedor_carrito_comprado.classList.remove("disabled");
    Swal.fire({
        title: "Gracias por su Compra!!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          location.href = "../index.html";
        }
      });
  }
}
let productCart = JSON.parse(localStorage.getItem("productCart"));
