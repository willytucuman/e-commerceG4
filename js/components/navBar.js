import { getLoggedUser } from "../services/getLoggedUser.js";
const header = document.querySelector("header");
const head = document.querySelector("head")

const Navbar = () => {
    const loggedUser = getLoggedUser()
    header.innerHTML = `
    <nav>
            <div class="logo">
                
                <a href=""><img src="./assets/logo/logo_Minimizado.png" alt="">HardTech</a>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
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
            
            <div class="menu-icon"></div>
        </nav>
    `;
    const url =  '<link rel="stylesheet" href="../css/navBar.css"></link>'
    head.insertAdjacentHTML("beforeend", url)

    const menuIcon = document.querySelector(".menu-icon")
    const navList = document.querySelector("ul")
    menuIcon.addEventListener("click",()=>{
        menuIcon.classList.toggle("active")
        navList.classList.toggle("active")
    })
}
const logout = () => {
    localStorage.removeItem("loggedUser");
    document.location.reload();
  };
window.logout = logout;
export default Navbar