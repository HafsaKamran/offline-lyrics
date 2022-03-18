import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';

import { Album } from '../../interfaces/album';
import * as data from "../../../assets/data/albums.json";

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  currentAlbum : Album;
  allAlbums : any = (data as any).default;
  albumId = null;

  constructor(private activatedRoute: ActivatedRoute, private elementRef:ElementRef) { }

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.paramMap.get('id');
    this.currentAlbum = this.allAlbums[this.albumId];
    this.setStyle(this.currentAlbum.primary, this.currentAlbum.secondary);
  }

  setStyle(primary: string, secondary: string): void {
    this.elementRef.nativeElement.style.setProperty('--primary-color', primary); 
    this.elementRef.nativeElement.style.setProperty('--secondary-color', secondary); 
  }

}
