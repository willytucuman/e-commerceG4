import { getLoguedUser } from "../js/services/getLoguedUser";
export const notLoguedUser =()=>{
    if(!getLoguedUser()){
    return    window.location.pathname ='/views/login.html'
    }
} 