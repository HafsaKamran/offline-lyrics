import { Component } from '@angular/core';
import * as data from "../../assets/data/songs.json";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private songs : any = (data as any).default;
  private songsBackup;
  
  constructor() {
    this.songs = Object.values(this.songs);
    this.songsBackup = this.songs;
  }

  private filterList(event: any) {
    let searchTerm: string = event.detail.value;

    this.songs = this.songsBackup.filter(song => {
      if (!searchTerm) {
        return this.songsBackup;
      }
      if (song.title && searchTerm) {
        return (song.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
