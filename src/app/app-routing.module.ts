import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
