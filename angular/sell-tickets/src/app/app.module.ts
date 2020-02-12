import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { CityComponent } from './components/city/city.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CommonService} from './services/common.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PipeNamePipe } from './pipe-name.pipe';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    CityComponent,
    NowPlayingComponent,
    ComingSoonComponent,
    MovieItemComponent,
    PipeNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
