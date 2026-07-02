import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products :Product[] = [
    {id :1, title :'soap', price:'2000'},
    {id:2 , title:'shampoo',price:'3000'}
  ]

  constructor() { }

  getProducts():Observable<Product[]>{

    // return this.http.get<Product[]>('https://fakestoreapi.com/products')
     return of(this.products)
  }
}
