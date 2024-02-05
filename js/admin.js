import { Product } from "./classes/product.class.js";
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";
import Navbar from "./components/Header.js";
import Footer from "./components/Footer.js";
import { protectedAdminRoute } from "./routes/protectedAdminRoute.js";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));
let btn_eliminar = document.querySelectorAll(".btn-delete");

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  protectedAdminRoute();
  Footer();
});
setProducts();

const datos = getProducts();
let idProductUpdate = null;

const cargarDatos = () => {
  cuerpoTabla.innerHTML = "";
  datos.map((producto) => {
    const product = new Product(
      producto.id,
      producto.image,
      producto.title,
      producto.description,
      producto.price,
      producto.category,
      producto.stock,
      producto.detail1,
      producto.detail2,
      producto.detail3,
      producto.detail4,
      producto.size,
      producto.brand
    );
    cuerpoTabla.innerHTML += `
    <tr >
      <td class="align-middle"><img class="bg-transparent "  src="${product.image}" alt="${product.title}" width="100"></td>
      <td class="text-light  align-middle">${product.title}</td>
      <td class="ocultar text-light  align-middle">${product.description}</td>
      <td class="ocultar2 text-light align-middle">$${product.price}</td>
      <td class="ocultar2 text-light align-middle">${product.stock}</td>
      <td class="ocultar3 text-light align-middle">${product.category}</td>

      
      <td class="width=100% align-middle"><button class="btn btn-primary mb-2 w-100" onclick="mostrarModal('${product.id}')">Editar</button>
      <button class="btn btn-rojo btn-delete  mt-1 w-100 text-light" id="${product.id} ">Eliminar</button>
      </td>
      
    </tr>
    `;
  });
  actualizar_btn_delete();
};

window.mostrarModal = (id) => {

  idProductUpdate = id;
  let index = datos.findIndex((producto) => producto.id == idProductUpdate);

  document.getElementById("modaltitle").value = datos[index].title;
  document.getElementById("modaldescription").value = datos[index].description;
  document.getElementById("modalprice").value = datos[index].price;
  document.getElementById("modalcategory").value = datos[index].category;
  document.getElementById("modalstock").value = datos[index].stock;
  document.getElementById("modaldetail1").value = datos[index].detail1;
  document.getElementById("modaldetail2").value = datos[index].detail2;
  document.getElementById("modaldetail3").value = datos[index].detail3;
  document.getElementById("modaldetail4").value = datos[index].detail4;
  document.getElementById("modalsize").value = datos[index].size;
  document.getElementById("modalbrand").value = datos[index].brand;

  myModal.show();
};

const UpdateProduct = (e) => {
  e.preventDefault();
  let index = datos.findIndex((producto) => producto.id == idProductUpdate);
  datos[index].title = document.getElementById("modaltitle").value;
  datos[index].description = document.getElementById("modaldescription").value;
  datos[index].price = document.getElementById("modalprice").value;
  datos[index].category = document.getElementById("modalcategory").value;
  datos[index].stock = document.getElementById("modalstock").value;
  datos[index].detail1 = document.getElementById("modaldetail1").value;
  datos[index].detail2 = document.getElementById("modaldetail2").value;
  datos[index].detail3 = document.getElementById("modaldetail3").value;
  datos[index].detail4 = document.getElementById("modaldetail4").value;
  datos[index].size = document.getElementById("modalsize").value;
  datos[index].brand = document.getElementById("modalbrand").value;

  localStorage.setItem("products", JSON.stringify(datos));

  cuerpoTabla.innerHTML = "";
  cargarDatos();

  myModal.hide();
  Toastify({
    text: "Producto Editado",
    duration: 3000,
    close: true,
    gravity: "bottom", 
    position: "left", 
    stopOnFocus: true, 
    style: {
      background: "blue)",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem",
    },
    offset: {
      x: "1.5rem", 
      y: "1.5rem", 
    },
    onClick: function () {},
  }).showToast();
};
let myuuid = crypto.randomUUID();
const agregarProducto = (event) => {
  event.preventDefault();
  let id = myuuid;
  let image = document.getElementById("image").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("category").value;
  let stock = document.getElementById("stock").value;
  let detail1 = document.getElementById("detail1").value;
  let detail2 = document.getElementById("detail2").value;
  let detail3 = document.getElementById("detail3").value;
  let detail4 = document.getElementById("detail4").value;
  let size = document.getElementById("size").value;
  let brand = document.getElementById("brand").value;

  let producto = new Product(
    id,
    image,
    title,
    description,
    price,
    category,
    stock,
    detail1,
    detail2,
    detail3,
    detail4,
    size,
    brand
  );
 
  localStorage.setItem("products", JSON.stringify([...datos, producto]));
  datos.push(producto);
  document.querySelector("#formGift").reset();
  cargarDatos();
  Toastify({
    text: "Producto Agregado",
    duration: 3000,
    close: true,
    gravity: "bottom", 
    position: "left", 
    stopOnFocus: true,
    style: {
      background: "#5eff70",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem",
    },
    offset: {
      x: "1.5rem", 
      y: "1.5rem", 
    },
    onClick: function () {}, 
  }).showToast();
};

function actualizar_btn_delete() {
  btn_eliminar = document.querySelectorAll(".btn-delete");
  btn_eliminar.forEach((btn) => {
    btn.addEventListener("click", deleteProduct);
  });
}
function deleteProduct(e) {
  const idbtn = e.currentTarget.id;

  const index = datos.findIndex((producto) => producto.id == idbtn);
  let validar = Swal.fire({
    title: "Estas Seguro?",
    icon: "question",
    html: "Borrar Producto",
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Si",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrado!", "Tu producto se ha borrado.", "success");
      datos.splice(index, 1);
      
      localStorage.setItem("products", JSON.stringify(datos));
      cargarDatos();
    }
  });
}

document.querySelector("#formGift").addEventListener("submit", agregarProducto);
document.querySelector("#formModal").addEventListener("submit", UpdateProduct);
cargarDatos()