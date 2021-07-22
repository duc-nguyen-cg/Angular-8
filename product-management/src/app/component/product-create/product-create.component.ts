import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  isSubmitted = false;
  productCreateForm: FormGroup;
  constructor(private fb: FormBuilder,
              private productService: ProductService) { }

  ngOnInit() {
    this.productCreateForm = this.fb.group({
      id: [''],
      name: [''],
      price: [0],
      description: ['']
    });
  }
  submit() {
    const product = this.productCreateForm.value;
    this.productService.saveProduct(product);
    this.productCreateForm.reset();
  }
}
