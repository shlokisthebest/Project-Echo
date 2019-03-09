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
    this.http.get("assets/json/ProductFormatjson.json").subscribe(data =>{
      // console.log(data);
      this.data1 = data;
      this.out = this.fireEvent(category,type);  
    })
    // console.log(this.data1);
    
    
    return this.out;
  }

    fireEvent(category,type)
    {
      // console.log(this.data1);
      
        if(category === null)
        {
            // console.log(this.data1)
            return this.data1 
        }
        else if(type === null)
        {
          console.log(this.data1.filter(prod => prod.Type === category))
          return this.data1
        }
        else
        {
          this.data2 = (this.data1.filter(prod => prod.Type === category))
          console.log(this.data2[0].Products.filter(p => p.type === type))
          return this.data2
          // return of(this.data2[0].Products.filter(p => p.type === type))
        }
        // return data1
    }


  }
