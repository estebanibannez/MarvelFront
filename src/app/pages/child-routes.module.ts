import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CharactersComponent } from 'src/app/components/characters/characters.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from 'src/app/components/series/series.component';

const childRoutes: Routes  = [
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
