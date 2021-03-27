import { Product } from './product';

export class CartItem {

        id:number;
        productName:string;
        productId:number;
        qty:number;
        price:number;
        
    
        constructor(id: number, product:Product,qty=0){
            
            this.id=id
            this.productId=product.id
            this.qty=qty
            this.price=product.prix
            this.productName = product.name
            
        }
    
    
    
}
