const btnLogoutAdmin = document.querySelector('#btnLogoutAdmin')
btnLogoutAdmin.addEventListener("click",e=>{
    e.preventDefault()
    localStorage.removeItem("login_success")
    window.location.href = "login.html"
})