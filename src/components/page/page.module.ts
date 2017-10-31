import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Page } from './page';

@NgModule({
  declarations: [
    Page,
  ],
  imports: [
    IonicPageModule.forChild(Page),
  ],
  exports: [
    Page
  ]
})
export class PageComponentModule { }
