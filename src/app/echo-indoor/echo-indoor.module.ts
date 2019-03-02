

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchoIndoorRoutingModule } from './echo-indoor-routing.module';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './landing/banner/banner.component';
import { ProductDisplayComponent } from './landing/product-display/product-display.component';
import { SolutionsComponent } from './landing/solutions/solutions.component';
import { ProductDiscriptionComponent } from './product-display/product-discription/product-discription.component';
import { ProductShowMoreComponent } from './product-display/product-show-more/product-show-more.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDetailsComponent } from './checkout/user-details/user-details.component';
import { UserCartComponent } from './checkout/user-cart/user-cart.component';
import { ProductDisplayShowComponent } from './product-display/product-display.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [LandingComponent, BannerComponent, ProductDisplayShowComponent, ProductDisplayComponent, SolutionsComponent, ProductDiscriptionComponent, ProductShowMoreComponent, CheckoutComponent, UserDetailsComponent, UserCartComponent],
  imports: [
    CommonModule,
    EchoIndoorRoutingModule
  ]
})
export class EchoIndoorModule { }


