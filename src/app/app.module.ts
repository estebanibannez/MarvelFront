import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { AppComponent } from './app.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { MaterialModule } from 'src/app/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    PagesModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
