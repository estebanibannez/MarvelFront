import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { CharacterComponent } from 'src/app/components/characters/character/character.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
import { ComicComponent } from 'src/app/components/comics/comic/comic.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { OtherHerosComponent } from './components/other-heros/other-heros.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersModule } from './components/characters/characters.module';
import { AuthModule } from 'src/app/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,

    Notfound404Component,
    OtherHerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MaterialModule,
    CharactersModule,
    AuthModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
