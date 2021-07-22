import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEditForm: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        const product = this.productService.findById(this.id);
        this.productEditForm = this.fb.group({
          id: [product.id],
          name: [product.name],
          price: [product.price],
          description: [product.description]
        });
      }
    );
  }

  ngOnInit() {
  }

  updateProduct(id: number) {
    const product = this.productEditForm.value;
    this.productService.updateProductById(id, product);
    alert('Updated successfully!');
  }
}
