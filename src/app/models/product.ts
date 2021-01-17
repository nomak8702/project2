export class Product {
id: number;
name:string;
description:string;
weight:string;
price:number;

constructor(id,name,description= '',weight='',price=0){

this.id=id
this.name=name
this.description=description
this.weight=weight
this.price=price

}
}
