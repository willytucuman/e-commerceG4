/**
 * 
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword Recibe otra contraseña
 * @returns {bool} Devuelve un booleano dependiendo si las contraseñas coinciden o no. 
 */


export const validateRepeatPassword = (password, repeatPassword) =>{

    if (password === repeatPassword) {
       return true
    }
   
    return false 
   }