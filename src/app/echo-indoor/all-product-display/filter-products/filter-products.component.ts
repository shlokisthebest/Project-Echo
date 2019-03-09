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
        
        
    })
    console.log(this.productService.getProducts(this.category,this.type));
      this.filterd = this.productService.getProducts(this.category,this.type);
      
    // this.productService.getProducts(this.category,this.type).subscribe(p => this.filterd = p);

    // this.category = this.route.snapshot.params.category;
    // this.type1 = this.route.snapshot.params.type;
   
  }


  // fireEvent(category:string,type:string)
  // {
  //   // if (cat === null)
  //   // {
  //   //   console.log(this.filterd)
  //   // }else if (ty === null)
  //   // {
  //   //   console.log("here only category")
  //   //   this.filterd.filter(prod => prod.Type.toUpperCase().includes(cat.toUpperCase()))
  //   // }else
  //   // {
  //   //   console.log("Here only type and Categorys")
  //   //   this.filterd.filter(prod => 
  //   //     prod.Type.includes(cat.toUpperCase()))
      
  //   // }        



  //   if(this.category!=null && this.type!=null)
  //     {
  //       console.log("hiii");
  //       this.temp = this.prods.filter(f => f.Type.toLowerCase() === this.category.toLowerCase());
  //       console.log("1st TEMP :"+this.prods.filter(f => f.Type.toLowerCase() === this.category.toLowerCase()))
  //       // this.temp[0].Products.filter(x =>   x.type.toLowerCase().includes(this.type.toLowerCase()));
  //       // this.filterd = this.temp

  //       // this.temp = this.prods.filter(f => f.Type.toLowerCase().includes(this.category.toLowerCase()));
  //       // this.filterd = this.temp.filter(f => f.Products.filter(t => t.type.toLowerCase().includes(this.type.toLowerCase())))
  //       // // window.location.reload();
        
  //     }
  //     else if(this.category != null && this.type== null)
  //     {
  //         console.log("ffff");
  //        this.filterd = this.prods.filter(f => f.Type.toLowerCase().includes(this.category.toLowerCase()));

  //     }
  // }
}
