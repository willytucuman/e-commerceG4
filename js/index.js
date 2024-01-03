import {setAdminUser} from "../js/services/setAdminUser.js"
import  {btnLogIn}  from "./sesionInit.js"
import btnRegister from "./btnRegisters.js"
document.addEventListener("DOMContentLoaded",()=>{
    setAdminUser();   
    btnLogIn;
    btnRegister;
})