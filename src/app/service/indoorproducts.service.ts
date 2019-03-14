import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndoorproductsService {
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('../../assets/json/ProductFormatjson.json');
  }
}
