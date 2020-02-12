import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicDetailPageRoutingModule } from './music-detail-routing.module';

import { MusicDetailPage } from './music-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicDetailPageRoutingModule
  ],
  declarations: [MusicDetailPage]
})
export class MusicDetailPageModule {}
