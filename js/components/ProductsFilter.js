import { loadTable } from "../index.js";
import { getProducts } from "../services/getProducts.js";
let products = getProducts();
const productsFilter = document.querySelector(".main__productsFilter")
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
    const inputCategoryFilter = document.querySelector(".main__inputCategoryFilter");
    const btnFilterClear = document.querySelector(".main__btnFilterClear")
    const tableMsjNotFound = `<div class="w-100 vh-100 text-center"> <h2 class="text-secondary">Oops, no hay productos que coincidan con su busqueda</h2></div>`;
    const productsTable = document.querySelector(".main__productsTable");
    // console.log(inputCategoryFilter.parentNode.innerHTML)


    const renderCategoryFilter = () => {
      inputCategoryFilter.innerHTML = ``;
      inputCategoryFilter.insertAdjacentHTML("beforeend", `<option disabled selected hidden class="default" value=""> Filtrar por categoria </option>`)
      const categoryFilter = products.map((prod)=>{
        const cat = prod.category.trim().charAt().toUpperCase()+prod.category.slice(1);
        return cat;
      });
      const categories = [...new Set(categoryFilter)];
      categories.forEach( cat => {
        inputCategoryFilter.insertAdjacentHTML("beforeend", `<option value="${cat}">${cat}</option>`)
      })  
    }
    renderCategoryFilter()


    const renderFilteredProducts = (inputName, inputCategory) => {
      console.log(inputName, inputCategory);
      let filteredProducts = nameProductFilter(inputName);
      console.log(filteredProducts);
      filteredProducts = categoryProductFilter(inputCategory, filteredProducts);
      console.log(filteredProducts);
      filteredProducts!="" ? loadTable(filteredProducts) : productsTable.innerHTML = tableMsjNotFound;
    }

    const nameProductFilter = (inputWord) => {
      products = getProducts();
      let outgoing = [];
      const amendedInputWord = inputWord.toString().toLowerCase().trim();
      if (amendedInputWord == "") {
        outgoing = products
      } else {
        products.forEach( product => {
        const amendedProductName = product.title.toLowerCase();
        amendedProductName.includes(amendedInputWord) ? outgoing.push(product) : null
      })
      }
      console.log(outgoing);
      return outgoing;
    };

    const categoryProductFilter = (selectedCategory, productArray) => {
      console.log(selectedCategory);
      console.log(productArray);
      const outgoing = productArray.filter((product) => product.category.toLowerCase() == selectedCategory.toLowerCase());
      console.log(outgoing);
      if (selectedCategory) {
        console.log(selectedCategory);
        return outgoing 
      } else {
        return productArray;
      }
    };

    inputNameFilter.addEventListener("keyup", (e) => {
      renderFilteredProducts(
        e.target.value.toLowerCase(),
        inputCategoryFilter.value.toLowerCase()
      );
      console.log(e.target.value.toLowerCase())
    });

    inputCategoryFilter.addEventListener("change", (e) => {
      renderFilteredProducts(
        inputNameFilter.value.toLowerCase(),
        e.target.value.toLowerCase()
      );
      console.log(e.target.value.toLowerCase())
    });

    btnFilterClear.addEventListener("click", (e) => {
      e.preventDefault();
      inputNameFilter.value = "";
      inputCategoryFilter.value = "";
      loadTable(products)
    });
};

export default ProductsFilter;