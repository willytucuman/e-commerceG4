import { paginator } from "../index.js";
import { getProducts } from "../services/getProducts.js";
let products = getProducts();
const productsFilter = document.querySelector(".main__productsFilter");
const pageFrame = (pageId) => {
  return `<div class="carousel-item"><div class="main__productsTable main__productsTable_page_${pageId}"></div></div>`;
};
const productsTableX = (pageId) => {
  return document.querySelector(`.main__productsTable_page_${pageId}`);
};
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
<div class="col-auto">
    <select class="main__inputPriceOfferFilter form-select text-center">
      <option disabled selected hidden class="default" value=""> Ordenar por precio </option>
      <option class="main__PriceOfferFilterOption" value="ascendente">Precio ascendente</option>
      <option class="main__PriceOfferFilterOption" value="descendente">Precio descendente</option>
      <option class="main__PriceOfferFilterOption" value="oferta">En Oferta</option>
    </select>
</div>
<div class="col-auto">
    <select class="main__inputCategoryFilter form-select text-center">
    </select>
</div>
<div class="col-auto">
    <select class="main__inputPPP form-select text-center">
      <option disabled selected hidden class="" value="">Items/pág.</option>
      <option class="main__pppOption" value="5">5</option>
      <option class="main__pppOption" value="10">10</option>
      <option class="main__pppOption" value="20">20</option>
      <option class="main__pppOption" value="40">40</option>
      <option class="main__pppOption" value="100">100</option>
    </select>
</div>
<div class="col-auto">
    <button
      class="main__btnFilterClear btn">
      Limpiar filtros
    </button>
</div>
</form>`;

const ProductsFilter = () => {
  productsFilter.innerHTML = filterContent;
  productsFilter.classList.value += " container mb-4 mt-5";
  const inputNameFilter = document.querySelector(".main__inputNameFilter");
  const inputPriceOfferFilter = document.querySelector(".main__inputPriceOfferFilter");
  const inputCategoryFilter = document.querySelector(".main__inputCategoryFilter");
  const btnFilterClear = document.querySelector(".main__btnFilterClear");
  const inputPPP = document.querySelector(".main__inputPPP");
  const tableMsjNotFound = `<div class="w-100 vh-100 text-center"> <h2 class="text-secondary">Oops, no hay productos que coincidan con su busqueda</h2></div>`;
  const productsTable = document.querySelector(".main__productsTable");

  const renderCategoryFilter = () => {
    const categoryFirstLine = `<option disabled selected hidden class="default" value=""> Filtrar por categoria </option>`;
    inputCategoryFilter.innerHTML = ``;
    inputCategoryFilter.insertAdjacentHTML("beforeend", categoryFirstLine);
    products = JSON.parse(localStorage.getItem('products'))
    const categoryFilter = products.map((prod) => {
      const cat =
        prod.category.trim().charAt().toUpperCase() + prod.category.slice(1);
      return cat;
    });
    const categories = [...new Set(categoryFilter)];
    categories.forEach((cat) => {
      inputCategoryFilter.insertAdjacentHTML(
        "beforeend",
        `<option class="main__categoriesOption" value="${cat}">${cat}</option>`
      );
    });
  };
  renderCategoryFilter();

  const pagesTable = document.querySelector(".main__pagesTable");
  console.log(pagesTable)

  const renderFilteredProducts = (inputName, inputOrder, inputCategory, inputQty) => {
    let filteredProducts = nameProductFilter(inputName);
    filteredProducts = priceOfferFilter(inputOrder, filteredProducts)
    filteredProducts = categoryProductFilter(inputCategory, filteredProducts);
    filteredProducts != ""
      ? paginator(filteredProducts, inputQty||10)+(console.log(inputQty))
      : (pagesTable.innerHTML = "")+(pagesTable.insertAdjacentHTML("beforeend", pageFrame(0)))+(productsTableX(0).parentElement.classList.add("active"))+(productsTableX(0).innerHTML = tableMsjNotFound);
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

  const priceOfferFilter = (selectedOrderOrOffer, productsArray) => {
    let arrayOrdered = [];
    if (selectedOrderOrOffer=="ascendente") {
      arrayOrdered = productsArray.sort((a, b) => a.price - b.price);
      return arrayOrdered;
    } else if (selectedOrderOrOffer=="descendente") {
      arrayOrdered = productsArray.sort((a, b) => b.price - a.price);
      return  arrayOrdered;
    } else if(selectedOrderOrOffer=="oferta") {
      arrayOrdered = (productsArray.filter(product => product.offer == true)).sort((a, b) => a.price - b.price);
      return arrayOrdered
    } else {
      return productsArray;
    }
  };

  const categoryProductFilter = (selectedCategory, productsArray) => {
    const outgoing = productsArray.filter(
      (product) =>
        product.category.toLowerCase() == selectedCategory.toLowerCase()
    );
    if (selectedCategory) {
      return outgoing;
    } else {
      return productsArray;
    }
  };

  inputNameFilter.addEventListener("keyup", (e) => {
    renderFilteredProducts(
      e.target.value.toLowerCase(),
      inputPriceOfferFilter.value,
      inputCategoryFilter.value.toLowerCase(),
      inputPPP.value
    );
  });

  inputPriceOfferFilter.addEventListener("change", (e) => {
    renderFilteredProducts(
      inputNameFilter.value.toLowerCase(),
      e.target.value,
      inputCategoryFilter.value.toLowerCase(),
      inputPPP.value
    );
    document.activeElement.blur();
  });

  inputCategoryFilter.addEventListener("change", (e) => {
    renderFilteredProducts(
      inputNameFilter.value.toLowerCase(),
      inputPriceOfferFilter.value,
      e.target.value.toLowerCase(),
      inputPPP.value
    );
    document.activeElement.blur();
  });

  btnFilterClear.addEventListener("click", (e) => {
    e.preventDefault();
    inputNameFilter.value = "";
    inputPriceOfferFilter.value = "";
    inputCategoryFilter.value = "";
    inputPPP.value = "";
    paginator(products, 10);
    document.activeElement.blur();
  });

  inputPPP.addEventListener("change", (e) => {
    renderFilteredProducts(
      inputNameFilter.value.toLowerCase(),
      inputPriceOfferFilter.value,
      inputCategoryFilter.value.toLowerCase(),
      e.target.value
    );
    document.activeElement.blur();
  });
};
export default ProductsFilter;
