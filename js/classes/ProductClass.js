export class Producto {
    constructor (name,category,price,quantity,image){
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
        this.image = image
        this.id = crypto.randomUUID()
    }
}
