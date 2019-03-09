import { Component, OnInit } from '@angular/core';
import { IndoorproductsService } from 'src/app/service/indoorproducts.service';
import { ProductType } from 'src/app/modal/Product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  // filtered = [1,2,3,4];
  public isCheckedCCTV;
  public filterd:ProductType[];
  public prods:ProductType[];

  constructor(private productService:IndoorproductsService) {  
  }
  ngOnInit() {
    // this.productService.getProducts().subscribe(p => this.filterd = this.prods = p);
    
  }

  
  checkValueCCTV(event){

    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked)
    {
      this.filterd = this.prods.filter(f => f.Type.toLowerCase().includes("cctv"))
    }
    else{
      this.filterd = this.prods;
    }
 }

}
