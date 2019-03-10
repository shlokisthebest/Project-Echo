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
  public filterd = [];
  category:string;
  type:string;
  data2:any;
  pname:string;
  constructor(private productService:IndoorproductsService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      this.category = params.get('category');
      this.type = params.get('type');
      console.log("category:"+this.category);
      console.log("type :"+this.type);
      this.productService.getProducts().subscribe(dataq =>{
        this.filterd = dataq;
        console.log(dataq);
        this.filterd = this.fireEvent(this.filterd,this.category, this.type);
        console.log(this.filterd);
        this.pname = this.filterd[0].Products.pname
      })
    })
  }

  fireEvent(filtered,category,type)
  {
      if(category === null)
      {
          return filtered
      }
      else if(type === null)
      {
        filtered = filtered.filter(prod => prod.Type == category);
        return filtered;
      }
      else
      {
        this.data2 = filtered.filter(prod => prod.Type === category);
        let data3= '';
        data3 = this.data2[0].Products.filter(p => p.type === type);
        this.data2[0].Products = data3;
        console.log(this.data2);
        return this.data2;
      }
  }
}
