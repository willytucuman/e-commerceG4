import { getLoggedUser } from "../services/getLoggedUser.js";

const header = document.querySelector("header");

const Navbar = () => {
    const loggedUser = getLoggedUser()
    return (header.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/assets/logo/logo_Minimizado.png" alt="Logo" width="40" height="32" class="d-inline-block align-text-center">
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
                </ul>

                <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                ${
                  loggedUser
                    ? ""
                    : `<li class="nav-item">
                <a class="nav-link" href="/views/login.html">Ingresar <i class="bi bi-box-arrow-in-right"></i></a>
              </li>`
                }
          
              ${
                loggedUser
                  ? `<li class="nav-item dropdown me-5">
              <a class="nav-link dropdown-toggle fs-5"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 ${
                   loggedUser?.role == "admin" ? "Admin" : ""
                 } <i class="bi bi-person "></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li ><a class="dropdown-item w-100 d-flex" href="/views/404.html">Opciones <i class="bi bi-gear ms-auto"></i></a></li>
                ${
                  loggedUser.role == "admin"
                    ? '<li ><a class="dropdown-item w-100 d-flex" href="/views/adminPage.html">Panel de administrador <i class="bi bi-gear ms-2"></i></a></li>'
                    : ""
                }
                <li><a id="logout" onclick="logout()" class="dropdown-item w-100 d-flex">Cerrar sesion <i class="bi bi-box-arrow-in-left ms-auto"></i></a></li>
              </ul>
              </li>`
                  : ""
              }
                </ul>
            </div>
        </div>
    </div>
</nav>
    `)
}
const logout = () => {
    localStorage.removeItem("loggedUser");
    document.location.reload();
  };
  window.logout = logout;
export default Navbar;