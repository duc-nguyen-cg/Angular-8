import { Component, OnInit } from '@angular/core';
import {SongService} from '../../service/song.service';
import {Song} from '../../model/song';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css']
})
export class MusicPlaylistComponent implements OnInit {
  playList: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit() {
    this.playList = this.songService.playlist;
  }
}
