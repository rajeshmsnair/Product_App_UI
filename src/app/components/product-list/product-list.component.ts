import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { Product } from '../../model/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private _productService: ProductService, 
    private _router :Router             
    ) { }

  ngOnInit(): void {
     this._productService.getProducts().subscribe((data) => {
      this.products = data;
 
    
  })};
  
  getProductDetails(Id: number,index:number) {
   this._router.navigate(['/product-details', {Id:Id,Code:index}]);
  }
}
