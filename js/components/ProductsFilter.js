import RenderProductsTable from "./RenderProductsTable.js";
import { getProducts } from "../services/getProducts.js";
let products = getProducts();
const productsFilter = document.querySelector(".main__productsFilter");
const filterContent = `<form class="main__formProductFilter row g-3 justify-content-center">
<div class="col-11 col-md-4">
    <div class="input-group">
        <input
        type="text"
        class="main__inputNameFilter form-control"
        placeholder="Introduzca un producto deseado..."
        autocomplete="off"
        />
    </div>
</div>
<div class="col-auto col-md-4 ">
    <select class="main__inputCategoryFilter form-select">
        
    </select>
</div>
<div class="col-auto col-md-3">
    <button
      class="main__btnFilterClear btn btn-dark border-1 border-light w-100">
      Limpiar filtros
    </button>
</div>
</form>`;

const ProductsFilter = () => {
  productsFilter.innerHTML = filterContent;
  productsFilter.classList.value = "container mt-5 pt-5";
  const inputNameFilter = document.querySelector(".main__inputNameFilter");
  const inputCategoryFilter = document.querySelector(
    ".main__inputCategoryFilter"
  );
  const btnFilterClear = document.querySelector(".main__btnFilterClear");
  const tableMsjNotFound = `<div class="w-100 vh-100 text-center"> <h2 class="text-secondary">Oops, no hay productos que coincidan con su busqueda</h2></div>`;
  const productsTable = document.querySelector(".main__productsTable");

  const renderCategoryFilter = () => {
    const categoryFirstLine = `<option disabled selected hidden class="default" value=""> Filtrar por categoria </option>`;
    inputCategoryFilter.innerHTML = ``;
    inputCategoryFilter.insertAdjacentHTML("beforeend", categoryFirstLine);
    const categoryFilter = products.map((prod) => {
      const cat =
        prod.category.trim().charAt().toUpperCase() + prod.category.slice(1);
      return cat;
    });
    const categories = [...new Set(categoryFilter)];
    categories.forEach((cat) => {
      inputCategoryFilter.insertAdjacentHTML(
        "beforeend",
        `<option value="${cat}">${cat}</option>`
      );
    });
  };
  renderCategoryFilter();

  const renderFilteredProducts = (inputName, inputCategory) => {
    let filteredProducts = nameProductFilter(inputName);
    filteredProducts = categoryProductFilter(inputCategory, filteredProducts);
    filteredProducts != ""
      ? RenderProductsTable(filteredProducts)
      : (productsTable.innerHTML = tableMsjNotFound);
  };

  const nameProductFilter = (inputWord) => {
    products = getProducts();
    let outgoing = [];
    const amendedInputWord = inputWord.toString().toLowerCase().trim();
    if (amendedInputWord == "") {
      outgoing = products;
    } else {
      products.forEach((product) => {
        const amendedProductName = product.title.toLowerCase();
        amendedProductName.includes(amendedInputWord)
          ? outgoing.push(product)
          : null;
      });
    }
    return outgoing;
  };

  const categoryProductFilter = (selectedCategory, productArray) => {
    const outgoing = productArray.filter(
      (product) =>
        product.category.toLowerCase() == selectedCategory.toLowerCase()
    );
    if (selectedCategory) {
      return outgoing;
    } else {
      return productArray;
    }
  };

  inputNameFilter.addEventListener("keyup", (e) => {
    renderFilteredProducts(
      e.target.value.toLowerCase(),
      inputCategoryFilter.value.toLowerCase()
    );
  });

  inputCategoryFilter.addEventListener("change", (e) => {
    renderFilteredProducts(
      inputNameFilter.value.toLowerCase(),
      e.target.value.toLowerCase()
    );
  });

  btnFilterClear.addEventListener("click", (e) => {
    e.preventDefault();
    inputNameFilter.value = "";
    inputCategoryFilter.value = "";
    RenderProductsTable(products);
  });
};
export default ProductsFilter;
