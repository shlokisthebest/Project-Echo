import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-product-display',
  templateUrl: './all-product-display.component.html',
  styleUrls: ['./all-product-display.component.css']
})
export class AllProductDisplayComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 500);
  }

}
