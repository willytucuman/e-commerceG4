import { Product } from "./classes/product.class.js";
import { getProducts } from "./services/getProducts.js";
import { setProducts } from "./services/setProducts.js";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));
let btn_eliminar = document.querySelectorAll(".btn-delete");

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
      producto.stock
    );
    cuerpoTabla.innerHTML += `
    <tr>
      <td><img class="rounded  img-thumbnail"  src="${product.image}" alt="${product.title}" width="100"></td>
      <td>${product.title}</td>
      <td class="ocultar ">${product.description}</td>
      <td class="ocultar2">$${product.price}</td>
      <td class="ocultar2">${product.stock}</td>
      <td class="ocultar3">${product.category}</td>
      
      <td class="width=100%"><button class="btn btn-primary mb-2 w-100" onclick="mostrarModal(${product.id})">Update</button>
      <button class="btn btn-primary btn-delete mt-1 w-100" id="${product.id} ">Delete</button>
      </td>
      
    </tr>
    `;
  });
  actualizar_btn_delete();
};

window.mostrarModal = (id) => {
  console.log(id);
  idProductUpdate = id;
  let index = datos.findIndex((producto) => producto.id === idProductUpdate);

  document.getElementById("modaltitle").value = datos[index].title;
  document.getElementById("modaldescription").value = datos[index].description;
  document.getElementById("modalprice").value = datos[index].price;
  document.getElementById("modalcategory").value = datos[index].category;
  document.getElementById("modalstock").value = datos[index].stock;

  myModal.show();
};

const UpdateProduct = (e) => {
  e.preventDefault();
  let index = datos.findIndex((producto) => producto.id === idProductUpdate);
  datos[index].title = document.getElementById("modaltitle").value;
  datos[index].description = document.getElementById("modaldescription").value;
  datos[index].price = document.getElementById("modalprice").value;
  datos[index].category = document.getElementById("modalcategory").value;
  datos[index].stock = document.getElementById("modalstock").value;

  // Guardar los datos actualizados en el localstorage
  localStorage.setItem("products", JSON.stringify(datos));

  // Actualizar la tabla con los datos actualizados
  cuerpoTabla.innerHTML = "";
  cargarDatos();

  myModal.hide();
  Toastify({
    text: "Product Edit",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "blue)",
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

  let producto = new Product(
    id,
    image,
    title,
    description,
    price,
    category,
    stock
  );
  //Guardar el nuevo prodcuto en el localStorage juntos con los otros ya existentes
  localStorage.setItem("products", JSON.stringify([...datos, producto]));
  datos.push(producto);
  document.querySelector("#formGift").reset();
  cargarDatos();
  Toastify({
    text: "Product Add",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#5eff70",
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
};

// Función para eliminar un producto de la tabla y del localStorage cuando se hace click en el botón "Delete"
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
    title: "Are you sure?",
    icon: "question",
    html: "Delete Produtc",
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      datos.splice(index, 1);
      // Guardar los datos actualizados en el localstorage
      localStorage.setItem("products", JSON.stringify(datos));
      cargarDatos();
    }
  });
}

document.querySelector("#formGift").addEventListener("submit", agregarProducto);
document.querySelector("#formModal").addEventListener("submit", UpdateProduct);
cargarDatos();
