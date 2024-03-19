export class Product {
    id: number;
    image: string; 
    title: string;
    price: Number;

    constructor(id: number, image: string, title: string, price: Number){
        this.id = id;
        this.image = image;
        this.title = title;
        this.price = price;
    }
}