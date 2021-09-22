import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from 'src/app/pages/pages.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';


const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path:'home', component: HomeComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'comics', component: ComicsComponent },
      { path: '', redirectTo:'/home', pathMatch:'full'},
    ]
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
