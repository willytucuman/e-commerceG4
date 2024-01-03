export const getProducts =()=>{
    const products = JSON.parse(localStorage.getItem("products"))
    return products
}