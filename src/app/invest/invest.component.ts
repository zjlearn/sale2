import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/services/productService';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  selectedType = 0;  // 项目的类型
  selectedStatus = 0;
  selectedDuration = 0;

  productList: Product [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  selectType(type: number) {
    this.selectedType = type;
  }

  selectStatus(status: number) {
    this.selectedStatus = status;
  }

  selectDuration(duration: number) {
    this.selectedDuration = duration;
  }

  /**
   * 根据查询条件获取相应的产品项目
   */
  getProducts() {
    this.productService.getProductsByCond(this.selectedType, this.selectedStatus, 1, 3, 1, 10);
  }

}

