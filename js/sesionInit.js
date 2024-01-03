
 const btnLogIn = document.querySelector('#btnLogIn')
 const userLogued = JSON.parse(localStorage.getItem("login_success"))
if(userLogued){
    btnLogIn.setAttribute("hidden","true")
}
btnLogIn.addEventListener("click",e=>{
    e.preventDefault()
    
    window.location.href = "/views/login.html"
})


export default btnLogIn