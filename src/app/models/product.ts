export class Product {

    
    id:number;
    name:string;
    description:string;
    prix:number;
    imageUrl:string
    image1:string
    image2:string

    constructor(id:number,name:string,description='',prix:number,imageUrl='https://source.unsplash.com/random/200x200?sig=1',image1:string,
    image2:string){
        this.image1=image1
        this.image2=image2
        this.id=id
        this.name=name
        this.description=description
        this.prix=prix
        this.imageUrl=imageUrl
    }

}
