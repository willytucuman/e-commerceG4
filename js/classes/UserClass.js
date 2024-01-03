 class User {
    constructor({name,email,password}){
        this.name = name
        this.email = email
        this.password = password
        this.id = crypto.randomUUID()
    }
}
export default User;