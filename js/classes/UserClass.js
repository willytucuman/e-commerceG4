 class User {
    constructor({name,email,password,role}){
        this.name = name
        this.email = email
        this.password = password
        this.role = role
        this.id = crypto.randomUUID()
    }
}
export default User;