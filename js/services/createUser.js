import User from "../classes/UserClass.js"
export const createUser =({name,email,password})=>{
    const users = JSON.parse(localStorage.getItem("users"))
    const newUser = new User({name:name,email:email,password:password,role: "user" })
    users.push(newUser)
    localStorage.setItem("users",JSON.stringify(users))
}