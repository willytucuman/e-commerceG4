
const header = document.querySelector("header");
const head = document.querySelector("head")

const Navbar = () => {
    const menuIcon = document.querySelector(".menu-icon")
    const navList = document.querySelector("ul")

    menuIcon.addEventListener("click",()=>{
        menuIcon.classList.toggle("active")
        navList.classList.toggle("active")
})
    return (header.innerHTML = `
    <nav>
            <div class="logo">
                <a href="">HardTech</a>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Whishlist</a></li>
                <li><a href="">CRUD</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <div class="menu-icon"></div>
        </nav>
    `)
    (head.innerHTML ='<link rel="stylesheet" href="./css/navBar.css">')
}
export default Navbar;
const menuIcon = document.querySelector(".menu-icon")
const navList = document.querySelector("ul")

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active")
    navList.classList.toggle("active")
})