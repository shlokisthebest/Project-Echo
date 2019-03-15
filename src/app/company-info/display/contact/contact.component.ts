import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form:NgForm)
  {
    let data = form.value; 
    console.log(data);
    emailjs.send("gmail","template_WRCFMOQE",data,"user_47piZuxXfb2pRndD4Oj1x").then((response) => {
      confirm("Email Send Successfully.")
      console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
      console.log('FAILED...', err);
     });
    form.resetForm();
    
  }

}
