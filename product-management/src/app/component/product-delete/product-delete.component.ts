import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: number;
  productDeleteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        const product = this.productService.findById(this.id);
        this.productDeleteForm = this.fb.group({
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

  deleteProduct(id: number) {
    this.productService.deleteProductById(id);
    this.router.navigate(['/products/list']);
  }
}
