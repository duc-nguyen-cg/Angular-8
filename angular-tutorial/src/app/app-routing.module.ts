import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {MusicPlaylistComponent} from './music-player/component/music-playlist/music-playlist.component';
import {SongPlayerComponent} from './music-player/component/song-player/song-player.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: MusicPlaylistComponent,
    children: [{
      path: ':id',
      component: SongPlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
