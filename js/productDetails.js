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
                    document.getElementById('productImg').src = productoEspecifico.image;
                    const contenidoHTML = `
                        <h2>${productoEspecifico.title}</h2>
                        <p>Precio: $${productoEspecifico.price}</p>
                        <p>Categoría: ${productoEspecifico.category}</p>
                        <p>Descripción: ${productoEspecifico.description}</p>
                        <button class="btn btn-primary">Agregar al Carrito</button>
                    `;
        elementoAMostrar.innerHTML=contenidoHTML
    } catch (error) {
        console.error('Error al mostrar el producto:', error);
    }
};
mostrarProductoPorId(idProductoBuscado);