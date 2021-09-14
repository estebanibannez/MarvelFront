import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
import { HomeComponent } from 'src/app/components/home/home.component';

import { Notfound404Component } from 'src/app/pages/notfound404/notfound404.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Notfound404Component }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
