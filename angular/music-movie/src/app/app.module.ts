import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MusicComponent } from './components/music/music.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MusicDetailComponent } from './components/music-detail/music-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MusicComponent,
    MovieDetailComponent,
    MusicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
