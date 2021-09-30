import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
import { OtherHerosComponent } from 'src/app/components/other-heros/other-heros.component';
import { SeriesComponent } from 'src/app/components/series/series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicComponent } from 'src/app/components/comics/comic/comic.component';
import { CharacterComponent } from 'src/app/components/characters/character/character.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from "ngx-owl-carousel-o";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    OtherHerosComponent,
    SeriesComponent
  ],
  exports:[ 
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    OtherHerosComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxPaginationModule,
    CarouselModule,
    SharedModule
  ]
})
export class ComponentsModule { }
