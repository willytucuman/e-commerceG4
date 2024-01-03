export class Producto {
    constructor (name,category,price,quantity,image,visible){
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
        this.image = image
        this.visible=visible
        this.id = crypto.randomUUID()
    }
}
