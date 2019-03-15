import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderEchoIndoorComponent } from './header-echo-indoor/header-echo-indoor.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ HeaderEchoIndoorComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
