import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicDetailPage } from './music-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MusicDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicDetailPageRoutingModule {}
