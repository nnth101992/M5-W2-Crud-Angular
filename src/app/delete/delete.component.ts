import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  product: IProduct;
  subscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      // this.product = this.productService.getProductById(id);
    });
  }

  delete(): void {
    this.productService.deleteProduct(this.product);
  }
}
