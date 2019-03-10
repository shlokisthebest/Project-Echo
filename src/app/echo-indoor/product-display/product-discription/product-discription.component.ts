import { Component, OnInit } from '@angular/core';
import { ProductDisplayComponent } from '../../landing/product-display/product-display.component';
import { IndoorproductsService } from 'src/app/service/indoorproducts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-discription',
  templateUrl: './product-discription.component.html',
  styleUrls: ['./product-discription.component.css']
})
export class ProductDiscriptionComponent implements OnInit {

  public filterd = [{"Type":"","Products":[{"pid":"",
  "pname":"",
  "img":[],
  "discription":"",
  "series":"",
  "specification":[
    {
      "spec":""
    }
  ],
  "datasheetUrl":"",
  "type":""}
  ]}];
  category:string;
  type:string;
  data2:any;
  d1:any;
  productID : string;

  constructor(private productService : IndoorproductsService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    // this.productService.getProducts()

    this.route.paramMap
    .subscribe(params =>{
      this.category = params.get('category');
      this.type = params.get('type');
      this.productID = params.get('pid')
      console.log("category:"+this.category);
      console.log("type :"+this.type);
      console.log("pid :"+this.productID);

      this.productService.getProducts().subscribe(dataq =>{
        this.filterd = dataq;
        console.log(dataq);
        //here
        // console.log(this.filterd.find(p => p.Products.pid == this.productID));
       // this.d1 = this.filterd.find(p => p.Type == this.category)
        // console.log(this.d1[0].Products.find(d => d.type == this.type))
        this.filterd = this.fireEvent(this.filterd,this.category, this.type, this.productID);
        console.log(this.filterd);
      })
    })
    
  }
  fireEvent(filtered,category,type,pid)
  {
        this.data2 = filtered.filter(prod => prod.Type === category);
        let data3= '';
        data3 = this.data2[0].Products.filter(p => p.type === type);
        data3 = this.data2[0].Products.filter(d => d.pid === pid);
        this.data2[0].Products = data3;
        console.log(this.data2);
        return this.data2;
        // this.data2.filter(d => d.pid === pid);
  }
}
