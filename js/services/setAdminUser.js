import User from "../classes/UserClass.js"

export const setAdminUser = () =>{
    const adminUser = new User({name:"Admin",email: "admin@gmail.com", password: "adminPassword"})
    const users = localStorage.getItem("users")
    if (!users || users?.length == 0) {
        localStorage.setItem("users", JSON.stringify([adminUser]))
         window.location.href = "../index.html"
    }
   
}