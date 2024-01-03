import User from "./classes/UserClass.js" 

const SignUpForm = document.querySelector("#SignUpForm")

SignUpForm.addEventListener("submit", e=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const user = new User({name,email,password})
    const users =  JSON.parse(localStorage.getItem('users')) || [];
    const userExist = users.some(u=>u.email===email)
    if(userExist){
        return alert("Usuario ya registrado")
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    alert("usuario registrado con exito")
    window.location.href = "login.html"
})