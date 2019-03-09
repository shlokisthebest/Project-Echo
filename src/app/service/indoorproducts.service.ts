import { Injectable } from '@angular/core';

import { ProductType,ProductModel,Spec } from '../modal/Product';
import { PRODS } from '../modal/productList';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndoorproductsService {
  
  data1:any;
  data2:any;
  public out:any;

  constructor(private http : HttpClient) { }

  public getProducts(category,type):Observable<any>{
    console.log("category :"+category+"type :"+type)
    return this.http.get("assets/json/ProductFormatjson.json");

  }
}