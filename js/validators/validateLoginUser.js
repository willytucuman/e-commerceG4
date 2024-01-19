/**
 * 
 * @param {email} email  Recibe un email
 * @param {password} password Recibe una contraseña
 * @returns {bool} Devuelvue un booleano si las credenciales del usuario estan registradas.
 */

export const validateLoginUser = ({email, password}) =>{
    const users = JSON.parse(localStorage.getItem("users"))
    const userFound = users.find(user => user.email == email)
    const matchingPassword = password == userFound?.password
 
    if (userFound && matchingPassword) {
      return true
    }
 
    return false
 }