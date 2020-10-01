import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  subscription: Subscription; // xu ly routing
  product: IProduct;

  constructor(private productService: ProductService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      var id = +paramMap.get('id');

      this.getPBI(id);
      this.product.id = id;
      // this.productService.getProductById(id).subscribe(pr => this.product = pr);
    });
  }

  getPBI(id:number){
    this.productService.getProductById(id).subscribe(p => this.product = p);
  }

  updateProduct(): void {
    this.productService.editProduct(this.product, this.product.id).subscribe(()=>{
      this.router.navigate(['danhsach']);
    });
  }


}
