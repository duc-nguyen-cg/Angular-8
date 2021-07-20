import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../product-list/mock-products';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct?: Product = {};

  constructor() {
  }

  ngOnInit() {
  }

  saveNewProduct() {
    PRODUCTS.push(this.newProduct);
    this.newProduct = {};
  }
}
