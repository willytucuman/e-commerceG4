import Navbar from "./components/Navbar.js"
import { createUser } from "./services/createUser.js"
import { redirectIndexLogin } from "./utils/redirectIndexLogin.js"
import { redirectNotSuccesfull } from "./utils/redirectNotSuccesfull.js"

const showSuccesfulSignUpModal = () =>{
    const modal = new bootstrap.Modal(document.getElementById('succesfulSignupModal'))
    modal.show()
    setTimeout(redirectIndexLogin, 3000)
}
const notSuccessfullLogin = () =>{
    const modal = new bootstrap.Modal(document.getElementById('notSuccessfull'))
    modal.show()
    setTimeout(redirectNotSuccesfull, 3000)
}
const SignUpForm = document.querySelector("#SignUpForm")
// document.addEventListener("DOMContentLoaded" , ()=>{
//     // Navbar()
//    })

SignUpForm.addEventListener("submit", e=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const users =  JSON.parse(localStorage.getItem('users')) || [];
    const userExist = users.some(u=>u.email===email)
   if(userExist){
    return notSuccessfullLogin()
   }
   createUser({name,email,password})
   showSuccesfulSignUpModal()
})