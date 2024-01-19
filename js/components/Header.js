
const header = document.querySelector("header");
const head = document.querySelector("head")

const Navbar = () => {
    header.innerHTML = `
    <nav>
            <div class="logo">
                
                <a href=""><img src="./assets/logo/logoBlanco.png" alt="">HardTech</a>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <div class="menu-icon"></div>
        </nav>
    `;
    head.innerHTML ='<link rel="stylesheet" href="./css/navBar.css">';

    const menuIcon = document.querySelector(".menu-icon")
    const navList = document.querySelector("ul")
    menuIcon.addEventListener("click",()=>{
        menuIcon.classList.toggle("active")
        navList.classList.toggle("active")
    })
}
export default Navbar

