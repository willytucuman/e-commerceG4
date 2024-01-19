export const setLoggedUser = (email) => {
    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.find(user => user.email == email)
    localStorage.setItem("loggedUser", JSON.stringify(user))
}
