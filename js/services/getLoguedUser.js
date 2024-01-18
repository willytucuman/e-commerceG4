export const getLoguedUser = ()=>{
    return JSON.parse(localStorage("login_success")) || false
}