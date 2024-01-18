export const validateLoginUser = ({email, password}) =>{
    const users = JSON.parse(localStorage.getItem("users"))
    const userFound = users.find(user => user.email == email)
    const matchingPassword = password == userFound?.password
 
    if (userFound && matchingPassword) {
      return true
    }
 
    return false
 }