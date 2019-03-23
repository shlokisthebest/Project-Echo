import { Component, OnInit } from '@angular/core';
import { ProductDisplayComponent } from '../../landing/product-display/product-display.component';
import { IndoorproductsService } from 'src/app/service/indoorproducts.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-product-discription',
  templateUrl: './product-discription.component.html',
  styleUrls: ['./product-discription.component.css']
})
export class ProductDiscriptionComponent implements OnInit {

  public filterd = [{
    Type: '', Products: [{
      pid: '',
      pname: '',
      img: [],
      discription: '',
      series: '',
      specification: [
        {
          spec: ''
        }
      ],
      datasheetUrl: '',
      type: ''
    }
    ]
  }];
  category: string;
  type: string;
  data2: any;
  d1: any;
  productID: string;
  discription: any;

  constructor(private productService: IndoorproductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.category = params.get('category');
        this.type = params.get('type');
        this.productID = params.get('pid');
        console.log('category:' + this.category);
        console.log('type :' + this.type);
        console.log('pid :' + this.productID);

        this.productService.getProducts().subscribe(dataq => {
          this.filterd = dataq;
          console.log(dataq);
          this.filterd = this.fireEvent(this.filterd, this.category, this.type, this.productID);
          this.discription = this.filterd[0].Products[0].discription;
          console.log(this.filterd);
        });
      });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }
  fireEvent(filtered, category, type, pid) {
    this.data2 = filtered.filter(prod => prod.Type === category);
    let data3 = '';
    data3 = this.data2[0].Products.filter(p => p.type === type);
    data3 = this.data2[0].Products.filter(d => d.pid === pid);
    this.data2[0].Products = data3;
    console.log(this.data2);
    return this.data2;
  }
  submit(form:NgForm)
  {
    let data = form.value; 
    data.productId = this.productID
    console.log(data);
    emailjs.send("outlook","contact_form",data,"user_618thGwZfuuShPWVxlRXr").then((response) => {
      confirm("Email Send Successfully.")
      console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
      console.log('FAILED...', err);
     });
    form.resetForm();
    
  }
}
