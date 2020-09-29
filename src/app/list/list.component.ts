import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.getAllProduct();
  }

  ngOnInit(): void {
  }

  getAllProduct(): void {
    this.products = this.productService.getProduct();
  }
}

