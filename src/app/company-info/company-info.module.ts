import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './display/about/about.component';
import { ContactComponent } from './display/contact/contact.component';
import { TeamComponent } from './display/team/team.component';

@NgModule({
  declarations: [DisplayComponent, AboutComponent, ContactComponent, TeamComponent],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule
  ]
})
export class CompanyInfoModule { }
