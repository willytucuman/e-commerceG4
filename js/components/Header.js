import { getLoggedUser } from "../services/getLoggedUser.js";
const header = document.querySelector("header");
const head = document.querySelector("head")

const Navbar = () => {
    const loggedUser = getLoggedUser()
    header.innerHTML = `
    <nav class="navBar">
            <div class="logo">
                
                <a href="/index.html"><img src="/assets/logo/logoBlanco.png" alt="">HardTech</a>
            </div>
            <ul>
                <li><a href="/index.html">Inicio</a></li>
                <li><a href="/views/about.html">Nosotros</a></li>
                
                ${
                    loggedUser
                        ? ""
                        : `<li class="nav-item">
                    <a class="nav-link" href="/views/login.html">Ingresar <i class="bi bi-box-arrow-in-right"></i></a>
                </li>
                <button class="btn bg-transparent d-flex" type="button">
                    
                    <a href="../../views/cart.html" class="nav-link">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                    </a>
                    <span class="badge bg-danger rounded-pill" id="numerito">0</span>
                  </button>
                  `
                    }
            
                ${
                    loggedUser
                    ? `<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fs-admin"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                    ${
                    loggedUser?.role == "admin" ? "Admin" : ""
                    } <i class="bi bi-person "></i>
                </a>
                <ul class="dropdown-menu  dropdown-bg dropdown-menu-end">
                    <li ><a class="dropdown-item w-100 d-flex" href="/views/404.html">Opciones <i class="bi bi-gear ms-auto"></i></a></li>
                    ${
                    loggedUser.role == "admin"
                        ? '<li ><a class="dropdown-item w-100 d-flex" href="/views/adminPage.html">Panel administrador <i class="bi bi-gear ms-auto ps-2"></i></a></li>'
                        : ""
                    }
                    <li><a id="logout" onclick="logout()" class="dropdown-item w-100 d-flex pointer">Cerrar sesion <i class="bi bi-box-arrow-in-left ms-auto"></i></a></li>
                </ul>
                </li>
                <button class="bg-transparent d-flex" type="button">
                   <a href="../../views/cart.html" class="nav-link">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                    </a>
                    <span class="badge bg-danger rounded-pill" id="numerito">0</span>
                  </button>     `
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
