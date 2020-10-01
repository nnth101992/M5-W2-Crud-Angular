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
    this.products = this.getAllProduct();
  }

  ngOnInit(): void {
  }

  getAllProduct(): IProduct[] {
    this.productService.getProduct().subscribe(products => this.products = products);
    return this.products;
  }
}

