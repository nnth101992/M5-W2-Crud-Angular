import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  totalId = 4;
  listProduct: Array<IProduct> = [
    {
      id: 1, name: 'Iphone', description: 'Apple'
    },
    {
      id: 2, name: 'Galaxy Fold', description: 'Samsung'
    },
    {
      id: 3, name: 'Reno F', description: 'Oppo'
    },
    {
      id: 4, name: 'P9', description: 'Huawei'
    }
  ];

  constructor() {
  }

  getProduct(): Array<IProduct> {
    return this.listProduct;
  }

  getProductById(id: number): IProduct {
    return this.listProduct.find(item => item.id === id);
  }

  editProduct(product: IProduct): void{
    this.listProduct.forEach(p => {
      if (p.id === product.id) {
      }
    });
    // console.log(this.listProduct);
  }

  createProduct(product: IProduct): void {
    this.totalId++;
    product.id = this.totalId;
    this.listProduct.push(product);
  }

  deleteProduct(product: IProduct): void {
    this.listProduct.forEach((item, index) => {
      if (item === product) {
        this.listProduct.splice(index, 1);
      }
    });
  }
}
