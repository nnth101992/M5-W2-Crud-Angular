import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/';

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

  constructor(private http: HttpClient) {
  }

  // getProduct(): Array<IProduct> {
  //   return this.listProduct;
  // }

  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL+"/allproducts");
  }
  //
  // getProductById(id: number): IProduct {
  //   return this.listProduct.find(item => item.id === id);
  // }
  getProductById(id: number): Observable<IProduct> {
    // return this.listProduct.find(item => item.id === id);
    return this.http.get<IProduct>(API_URL+`/products/${id}`);
  }
  //
  // editProduct(product: IProduct): void{
  //   this.listProduct.forEach(p => {
  //     if (p.id === product.id) {
  //     }
  //   });
  //   // console.log(this.listProduct);
  // }
  editProduct(product: IProduct, id: number): Observable<IProduct>{
    return this.http.put<IProduct>(API_URL +`/product/${id}`, product);
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
