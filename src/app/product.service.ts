import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

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

  }

  deleteProduct(product: IProduct): void {

  }
}
