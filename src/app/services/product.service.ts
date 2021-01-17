import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products: Product[]  = [
new Product(1,'Pollo','Sos pizza, mozzarella, piept pui, ciuperci, porumb, măsline.','590 g.',25 ),
new Product(2,'Casei','Sos pizza, mozzarella, șuncă, salam, ciuperci, măsline, ardei copt, cremă de brânză.','620 g.',30 ),
new Product(3,'Mexicana','Sos pizza, mozzarella, salam, cârnat picant, porumb, ardei iute, cartofi prăjiți, sos aioli.','650 g.',28 ),
new Product(4,'Hawai','sos pizza, mozzarella, sunca, ananas.','550 g.',22),
new Product(5,'Carbonara','Sos pizza, mozzarella, speck, ou, parmezan.','650 g.',25 ),
new Product(6,'Carnivora','Sos de Pizza, 100% Mozzarella, Cârnați, Șuncă, Vită, Pepperoni.','700 g.',35 ),
new Product(7,'Margherita','Sos de Pizza, 100% Mozzarella.','550 g.',25 ),
new Product(8,'Margherita2','Sos de Pizza, 100% Mozzarella.','550 g.',25 ),
]

  constructor() { }

  getProducts(): Product[]{
  return this.products
  }
}
