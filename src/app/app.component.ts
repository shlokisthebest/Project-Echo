import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}
  title = 'Project';
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 500);
  }
}
