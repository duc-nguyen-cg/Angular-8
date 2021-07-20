import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  @Input() product?: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
