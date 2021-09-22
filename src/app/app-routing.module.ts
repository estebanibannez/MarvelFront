import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { ComicsComponent } from 'src/app/components/comics/comics.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { Notfound404Component } from 'src/app/pages/notfound404/notfound404.component';


const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: 'home',
        loadChildren: () =>
        import('./components/home/home.module').then((m) => m.HomeModule)
      },
      { path: 'characters',
        loadChildren: () =>
        import('./components/characters/characters.module').then((m) => m.CharactersModule)
      },
      { path: 'comics', component: ComicsComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: '**', component: Notfound404Component }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
