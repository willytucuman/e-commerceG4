import  {User}  from "../classes/userClass.js";

export const setAdminUser = () =>{
    const adminUser = new User({email: "admin@gmail.com", password: "adminPassword", role: "admin"})
    const users = localStorage.getItem("users")

    if (!users || users?.length == 0) {
        localStorage.setItem("users", JSON.stringify([adminUser]))
    }
}
