export const getLoggedUser = () =>{
    return JSON.parse(localStorage.getItem("loggedUser")) || false
} 