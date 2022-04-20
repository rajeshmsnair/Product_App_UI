import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../services/product.services';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id: any;
code:any;
productData:any
product : any;
constructor(private _router:Router,
     private _activatedRoute:ActivatedRoute,  
     private _productService: ProductService, ) {
    
  this.id= this._activatedRoute.snapshot.paramMap.get('Id')?.toString();
  this.code= this._activatedRoute.snapshot.paramMap.get('Code')?.toString();

}

  ngOnInit(): void {

    this._productService.getProductById(this.id).subscribe((data) => {
    this.product = data;

   });

  }

}
