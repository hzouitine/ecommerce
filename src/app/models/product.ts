export class Product {
    image: string; 
    title: string;
    price: Number;

    constructor(image: string, title: string, price: Number){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}