import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './display/about/about.component';
import { ContactComponent } from './display/contact/contact.component';
import { TeamComponent } from './display/team/team.component';
import {FormsModule} from '@angular/forms';
import { EwasteComponent } from './display/ewaste/ewaste.component';
import { CertificationComponent } from './display/certification/certification.component';

@NgModule({
  declarations: [DisplayComponent, AboutComponent, ContactComponent, TeamComponent, EwasteComponent, CertificationComponent],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule,
    FormsModule
  ]
})
export class CompanyInfoModule { }
