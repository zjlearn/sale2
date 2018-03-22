import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../shared/services/productService';
import {Product} from '../shared/models/product';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  displayedColumns = ['name', 'rate', 'duration', 'amount', 'completed'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.dataSource = new MatTableDataSource(this.products);
  }
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

