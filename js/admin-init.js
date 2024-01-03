const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.statusText}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return null;
  }
};
console.log(getProducts());

const showProducts = async () => {
  try {
    let producto = await getProducts();
    if (!producto) {
      console.log("No se pudo obtener los productos");
      return;
    }

    let mostrarProductos = document.getElementById("mostrar-productos");
    for (let i = 0; i < producto.length; i++) {
      //mostrar los productos en el html
      mostrarProductos.innerHTML += `
            <table id="cart" class="table table-hover table-condensed">
            <thead>
              <tr>
                <th style="width: 48%" >Product</th>
                <th style="width: 10%" >Price</th>
                <th style="width: 8%" >Stock</th>
                <th style="width: 9%" >Category</th>
                <th style="width: 15%" class="text-center">Codigo</th>
                <th style="width: 10%"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-th="Product">
                  <div class="row">
                    <div class="col-sm-4 hidden-xs">
                      <img
                        src=${producto[i].image}
                        alt="..."
                        class="img-responsive"
                        style="width: 25%;"
                      />
                    </div>
                    <div class="col-sm-8">
                      <h4 class="nomargin">${producto[i].title} </h4>
                      <p>
                      ${producto[i].description}
                      </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price: " class="text-center">$ ${producto[i].price} </td>
                <td data-th="Stock: " class="text-center">${producto[i].stock}</td>
                <td data-th="Category: " class="text-center">${producto[i].category}</td>
                <td data-th="Codigo: " class="text-center">${producto[i].id}</td>
                <td class="actions" data-th="">
                  <button class="btn btn-info btn-sm mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="black"
                      class="bi bi-arrow-repeat"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                      />
                    </svg>
                  </button>
                  <button class="btn btn-danger btn-sm mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
            `;
    }
  } catch (error) {
    console.log("Error al mostrar los productos:", error);
  }
};
showProducts();

//crear una funcion que haga un post y lo carge en un json 



const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

/*Funcion para sacar los datos del Formulario con FormData (ve la leccion anterior)*/

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}



/*Funcion para colocar los datos en el Servidor */
const urlPost = './database/propducts.json';
const postData = async () => {
 
  /*Crea un objeto con la informacion del formulario*/
   const newUser = getData();

   try{
    const response = await fetch(urlPost, {
    /*especifica el metodo que se va a usar*/
    method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    body: JSON.stringify(newUser)
    });
    

    if(response.ok){
        const jsonResponse = await response.json();

        /* Codigo a ejecutarse con la respuesta*/

        const {email, nombre, telefono} = jsonResponse;

        respuesta.innerHTML = 
        `<ul> 
           ¡Exito! Se guardó la siguiente información:
          <li>${email}</li> 
          <li>${nombre}</li> 
          <li>${telefono}</li>
        </ul>`
       
    }
   
   }catch(error){
     console.log(error);
   }
   
}




btn.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})