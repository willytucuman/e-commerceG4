const register = document.querySelector('#btnRegistro')
const userConnected = JSON.parse(localStorage.getItem("login_success"))
if(userConnected){
    register.setAttribute("hidden","true")
}
register.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = "/views/signUp.html"
})
export default register;