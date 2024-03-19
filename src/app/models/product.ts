export class Product {
    id: number;
    image: string; 
    title: string;
    price: number;

    constructor(id: number, image: string, title: string, price: number){
        this.id = id;
        this.image = image;
        this.title = title;
        this.price = price;
    }
}