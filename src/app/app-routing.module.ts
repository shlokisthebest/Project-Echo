
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },

  { path: 'echo-indoor', loadChildren: './echo-indoor/echo-indoor.module#EchoIndoorModule' },

  { path: 'company', loadChildren: './company-info/company-info.module#CompanyInfoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 


