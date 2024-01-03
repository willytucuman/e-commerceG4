const loginForm = document.querySelector("#loginForm")

const logout = document.querySelector('#logout')
 loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const Users = JSON.parse(localStorage.getItem("users"))
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert("Usuario y/o password incorrecto/s!! o usuario inexistente")
    }else if (validUser.email === "admin@gmail.com" && validUser.password ==="adminPassword"){
        alert("Bienvenido administrador nuevamente")
        localStorage.setItem('login_success', JSON.stringify(validUser))
        window.location.href = "../adminPage.html"
        return
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../index.html' 
})
