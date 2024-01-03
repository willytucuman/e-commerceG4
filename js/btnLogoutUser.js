const btnLogoutUser = document.querySelector('#btnLogoutUser')
btnLogoutUser.addEventListener("click",e=>{
    e.preventDefault()
    localStorage.removeItem("login_success")
    window.location.href="/views/login.html"
})