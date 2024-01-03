const btnLogoutAdmin = document.querySelector('#btnLogOutAdmin')
btnLogoutAdmin.addEventListener("click",e=>{
    e.preventDefault()
    alert("hasta luego administrador!")
    localStorage.removeItem("login_success")
    window.location.href = "/views/login.html"
})