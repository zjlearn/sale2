import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/productService';
import {Product} from '../shared/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  constructor(private  productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
