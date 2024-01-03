const btnLogoutUser = document.querySelector('#btnLogoutUser')
const loguedUser = JSON.parse(localStorage.getItem("login_success"))
if(!loguedUser){
    btnLogoutUser.setAttribute("hidden","true")
}

btnLogoutUser.addEventListener("click",e=>{
    e.preventDefault()
    alert(`hasta pronto ${loguedUser.name}!!`)
    localStorage.removeItem("login_success")
    window.location.href="/views/login.html"
})