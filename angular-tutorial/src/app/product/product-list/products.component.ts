import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from './mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = PRODUCTS;
  editedProduct?: Product;
  constructor() {
  }

  ngOnInit() {
  }

  onSelect(product: Product): void {
    this.editedProduct = product;
  }
}
