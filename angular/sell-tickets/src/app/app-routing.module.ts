import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { CityComponent } from './components/city/city.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path:'films',
    component:FilmsComponent,
    children:[
      {
        path:'nowPlaying',
        component:NowPlayingComponent
      },
      {
        path:'comingSoon',
        component:ComingSoonComponent
      },
      {
        path:"",
        redirectTo:"nowPlaying",
        pathMatch:"full"
      },
    ]
  },
  {
    path:'film/:id',
    component:FilmComponent
  },
  {
    path:'city',
    component:CityComponent
  },
  {
    path:"",
    redirectTo:"films/nowPlaying",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
