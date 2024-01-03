const register = document.querySelector('#btnRegistro')
register.addEventListener('click', (e)=>{
    e.preventDefault()
    // localStorage.removeItem('login_success')
    window.location.href = "/views/signUp.html"
})
export default register;