import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
