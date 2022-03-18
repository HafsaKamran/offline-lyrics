import { Component } from '@angular/core';
import * as data from "../../assets/data/albums.json";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private albums : any = (data as any).default;
  private albumsBackup: any;

  constructor() {
    this.albums = Object.values(this.albums);
    this.albumsBackup = this.albums;
  }

  private filterList(event: any) {
    let searchTerm: string = event.detail.value;

    this.albums = this.albumsBackup.filter(album => {
      if (!searchTerm) {
        return this.albumsBackup;
      }
      if (album.name && searchTerm) {
        return (album.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
