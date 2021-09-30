import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  declarations: [HomeComponent, PagesComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
