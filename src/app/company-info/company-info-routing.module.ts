

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './display/about/about.component';
import { ContactComponent } from './display/contact/contact.component';
import { TeamComponent } from './display/team/team.component';
import { HeaderEchoIndoorComponent } from '../shared/header-echo-indoor/header-echo-indoor.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'about', component: DisplayComponent,
    children: [{
      path: '', component: HeaderEchoIndoorComponent, outlet: 'header'
    },
    {
      path: '', component: AboutComponent, outlet: 'information'
    }]
  },
  {
    path: 'contact', component: DisplayComponent,
    children: [{
      path: '', component: HeaderEchoIndoorComponent, outlet: 'header'
    },
    {
      path: '', component: ContactComponent, outlet: 'information'
    }]
  },
  {
    path: 'team', component: DisplayComponent,
    children: [{
      path: '', component: HeaderEchoIndoorComponent, outlet: 'header'
    },
    {
      path: '', component: TeamComponent, outlet: 'information'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class CompanyInfoRoutingModule { }



