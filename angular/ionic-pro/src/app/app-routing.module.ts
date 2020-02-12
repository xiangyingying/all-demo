import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./views/movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  },
  {
    path: 'music-detail/:id',
    loadChildren: () => import('./views/music-detail/music-detail.module').then( m => m.MusicDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
