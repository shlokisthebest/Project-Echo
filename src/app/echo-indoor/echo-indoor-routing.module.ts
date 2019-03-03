import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './landing/banner/banner.component';
import { ProductDisplayComponent } from './landing/product-display/product-display.component';
import { ProductDisplayShowComponent } from './product-display/product-display.component';
import { SolutionsComponent } from './landing/solutions/solutions.component';
import { HeaderEchoIndoorComponent } from '../shared/header-echo-indoor/header-echo-indoor.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDiscriptionComponent } from './product-display/product-discription/product-discription.component';
import { ProductShowMoreComponent } from './product-display/product-show-more/product-show-more.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDetailsComponent } from './checkout/user-details/user-details.component';
import { UserCartComponent } from './checkout/user-cart/user-cart.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {
        path: '', component: BannerComponent, outlet: 'banner'
      },
      { 
        path: '', component: HeaderEchoIndoorComponent, outlet: 'header' 
      },
      {
        path: '', component: ProductDisplayComponent, outlet: 'ProductDisplay'
      },
      {
        path: '', component: SolutionsComponent, outlet: 'Solutions'
      }
    ]
  },
  {
    path: 'prod', component: ProductDisplayShowComponent,
    children: [
      {
        path: '', component: HeaderEchoIndoorComponent, outlet: 'header'
      },
      {
        path: '', component: ProductDiscriptionComponent, outlet: 'discription'
      },
      {
        path: '', component: ProductShowMoreComponent, outlet: 'showmore'
      }
    ]
  },
  {
    path: 'checkout', component: CheckoutComponent,
    children: [
      {
        path: '', component: HeaderEchoIndoorComponent, outlet: 'header'
      },
      {
        path: '', component: UserDetailsComponent, outlet: 'form'
      },
      {
        path: '', component: UserCartComponent, outlet: 'cart'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class EchoIndoorRoutingModule { }
