import Navbar from "./components/Header.js";
import { validateLoginUser } from "./validators/validateLoginUser.js";
import { showPassword } from "./utils/showPassword.js";
import { setLoggedUser } from "./services/setLoggedUser.js";
import { redirectIndex } from "./utils/redirectIndex.js";
import { actualizarnumbercart } from "./services/cart.number.js";
import Footer from "./components/Footer.js"

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  actualizarnumbercart(productCart);
  Footer();
});

const showPasswordButton = document.getElementById("showPasswordBtn");

showPasswordButton.addEventListener("click", (e) => {
  showPassword(e);
});

const loginForm = document.getElementById("loginForm")
const invalidLoginFeedback = document.getElementById("invalidLoginFeedback") 


const userLoginFeedback = (bool) =>{
  invalidLoginFeedback.classList.add("hidden")

   if (bool) {
    return  invalidLoginFeedback.classList.add("hidden")
   }

   invalidLoginFeedback.classList.remove("hidden")
   return 
}

/**
 * 
 * @param {object} e Evento de submit del formulario de login
 * @returns Debe mostrar el feedback dependiendo de la validación del login, settearlo y redirigir al usuario a la página principal si este fue correcto.
 */

const userLogin = (e) =>{
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target))
  if (validateLoginUser({email: formData.email, password: formData.password})) {
     userLoginFeedback(true)
     setLoggedUser(formData.email)
     setTimeout(redirectIndex,800) 
     return 
  }

  return userLoginFeedback(false)
}
let productCart = JSON.parse(localStorage.getItem("productCart"));
loginForm.addEventListener("submit", userLogin)