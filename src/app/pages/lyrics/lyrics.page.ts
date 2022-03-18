import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';

import { Song } from 'src/app/interfaces/song';
import * as data from '../../../assets/data/songs.json';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.page.html',
  styleUrls: ['./lyrics.page.scss'],
})
export class LyricsPage implements OnInit {
  songId = null;
  allSongs: any = (data as any).default;
  currentSong: Song;
  activeLang : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.songId = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentSong = this.allSongs[this.songId];
    this.activeLang = this.currentSong['hangul'];
    this.setStyle(this.currentSong.primary, this.currentSong.secondary);
  }

  setStyle(primary: string, secondary: string): void {
    this.elementRef.nativeElement.style.setProperty('--primary-color', primary);
    this.elementRef.nativeElement.style.setProperty('--secondary-color',secondary);
  }

  private segmentChanged(event: any) {
    this.activeLang = this.currentSong[event['detail']['value']];
  }
}
