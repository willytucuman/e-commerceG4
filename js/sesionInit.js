
// const user = JSON.parse(localStorage.getItem('login_success')) || false
// if(!user){
//     window.location.href = '/views/login.html'
// }

 export const btnLogIn = document.querySelector('#btnLogIn')
//  const btnRegister = document.querySelector("#btnRegistro")
// const userConnected = JSON.parse(localStorage.getItem("login_success"))
// console.log(userConnected)
// if(userConnected.email.length>0){
//     btnLogIn.setAttribute("hidden","true")
//     btnRegister.textContent = "Cerrar sesion"
// }
btnLogIn.addEventListener("click",e=>{
    e.preventDefault()
    window.location.href = "/views/login.html"
})


// btnLogIn.addEventListener("click",e=>{
//     e.preventDefault()
//     window.location.href = "/views/login.html"
// })
// if(userExist){
//     btnLogIn.setAttribute("hidden","true")
//     btnRegister.textContent= "cerrar sesion"
// }
// btnLogIn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     // localStorage.removeItem('login_success')
//     window.location.href = "/views/login.html"
// })
