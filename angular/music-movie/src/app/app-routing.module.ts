import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MusicComponent } from './components/music/music.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MusicDetailComponent } from './components/music-detail/music-detail.component';


const routes: Routes = [
  {
    path:'movie',
    component:MovieComponent
  },
  {
    path:'music',
    component:MusicComponent
  },
  {
    path:'movieDetail/:id',
    component:MovieDetailComponent
  },
  {
    path:'musicDetail',
    component:MusicDetailComponent
  },
  {
    path:"",
    redirectTo:'movie',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
