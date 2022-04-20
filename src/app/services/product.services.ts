import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root',
  })
export class ProductService {

  hostEnv = "";

  constructor(private http: HttpClient) {
    this.hostEnv = `${environment.apiEndPoint}/api/Product`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.hostEnv}/GetProducts`);
  }

  getProductById(Id: string): Observable<Product> {
    return this.http.get<Product>(`${this.hostEnv}/GetProductById/${Id}`);
  }
}
