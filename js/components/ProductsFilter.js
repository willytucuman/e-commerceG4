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
};

export default ProductsFilter;