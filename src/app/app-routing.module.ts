import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { loggedGuard } from './guards/logged.guard';
import { ContattiComponent } from './components/contatti/contatti.component';
import { MainComponent } from './components/main/main.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDettaglioComponent } from './components/film-dettaglio/film-dettaglio.component';
import { VideoFilmComponent } from './components/video-film/video-film.component';
import { CarrelloAcquistiFilmComponent } from './components/carrello-acquisti-film/carrello-acquisti-film.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contatti',
    component: ContattiComponent,
  },
  {
    path: 'catalogo',
    component: FilmListComponent,
  },
  {
    path: 'carrello',
    component: CarrelloAcquistiFilmComponent,
    canActivate: [loggedGuard],
  },
  {
    path: 'catalogo/:id',
    component: FilmDettaglioComponent,
    children: [
      {
        path: 'video/:codice',
        component: VideoFilmComponent,
      },
    ],
  },
  // {
  //   path: 'video/:id',
  //   component: VideoFilmComponent,
  // },
  {
    path: 'main',
    component: MainComponent,
  },
  // {
  //   path: 'blog',
  //   component: BlogComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ArticoliListComponent,
  //     },
  //     {
  //       path: 'nuovo',
  //       component: ArticoloAddComponent,
  //     },
  //     {
  //       path: ':id',
  //       component: ArticoloDetailComponent,
  //     },
  //     {
  //       path: 'modifica/:id',
  //       component: ArticoloEditComponent,
  //     },
  //   ],
  //   canActivate: [loggedGuard],
  // },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
