import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return products;
  }
}

const products: Product[] = [
  new Product('房压贷', 'BR5325', 4.8, 3, 125336, 263),
  new Product('车压贷', 'BR5325', 4.8, 5, 125336, 345),
  new Product('房压贷', 'BR5325', 4.8, 6, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
  new Product('房压贷', 'BR5325', 4.8, 7, 125336, 263),
];
