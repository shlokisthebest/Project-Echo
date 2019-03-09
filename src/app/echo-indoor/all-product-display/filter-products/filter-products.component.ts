import { Component, OnInit } from '@angular/core';
import { IndoorproductsService } from 'src/app/service/indoorproducts.service';
import { ProductType } from 'src/app/modal/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {
  public filterd:any;
  // public prods:ProductType[];
  // public temp:ProductType[];

  category:string;
  type:string;
  data1:any;
  data2:any;

  constructor(private productService:IndoorproductsService,private route:ActivatedRoute) {
    
    
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      this.category = params.get('category');
      this.type = params.get('type');
      //console.log(id);
      console.log("category:"+this.category);
      console.log("type :"+this.type);
      // this.fireEvent(this.category,this.type);
      this.productService.getProducts(this.category,this.type).subscribe(dataq =>{
        this.filterd = dataq;
        console.log(dataq);
        this.filterd = this.fireEvent(this.filterd,this.category, this.type);
        console.log(this.filterd);
      })
    })
  }

  fireEvent(filtered,category,type)
  {
    // console.log(this.data1);
      if(category === null)
      {
        console.log('hello');
          // console.log(this.data1)
          return filtered
      }
      else if(type === null)
      {
        console.log(category);
        console.log(filtered);
        filtered = filtered.filter(prod => prod.Type == category);
        console.log(filtered);
        return filtered;
      }
      else
      {
        console.log('peopl');
        this.data2 = filtered.filter(prod => prod.Type === category);
        console.log(this.data2[0].Products);
        console.log(type);
        this.data2 = this.data2[0].Products.filter(p => p.type === type);
        console.log(this.data2);
        return this.data2
      }
  }
}
