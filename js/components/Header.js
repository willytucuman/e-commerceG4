const header = document.querySelector("header");

const Navbar = () => {
    return (header.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="./assets/logo/logo_Minimizado.png" alt="Logo" width="40" height="32" class="d-inline-block align-text-center">
            HardTech
        </a>
        <button class="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasDarkNavbar" 
            aria-controls="offcanvasDarkNavbar" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title " id="offcanvasDarkNavbarLabel"><img src="./assets/logo/logo_Minimizado.png" alt="Logo" width="40" height="32" class="d-inline-block align-text-center  ">
                    HardTech
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav  justify-content-start align-items-center flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lista de Deseos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">CRUD</a>
                    </li>
                </ul>
                <ul class="navbar-nav justify-content-end align-items-center   flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active ms-2 me-2 p-0" aria-current="page" href="#" alt="log-in"><i class="bi bi-person-circle fs-2 p-0"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-0 ms-2 me-2" href="#"><i class="bi bi-cart fs-2 p-0 "></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    `)
}
export default Navbar;