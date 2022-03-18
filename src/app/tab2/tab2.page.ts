import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private songsBackup;
  private songs = [
    {
      "name"  : "All I Do",
      "album" : "VERI-ABLE",
      "cover" : "assets/albums/veri-able.png",
      "link"  : "all-i-do"
    },
    {
      "name"  : "Alright!",
      "album" : "VERI-US",
      "cover" : "assets/albums/veri-us.png",
      "link"  : "alright"
    },
    {
      "name"  : "Beautiful-x",
      "album" : "FACE YOU",
      "cover" : "assets/albums/face-you.png",
      "link"  : "beautiful-x"
    },
    {
      "name"  : "Connect",
      "album" : "FACE YOU",
      "cover" : "assets/albums/face-you.png",
      "link"  : "connect"
    },
    {
      "name"  : "Curtain Call",
      "album" : "FACE ME",
      "cover" : "assets/albums/face-me.png",
      "link"  : "curtain-call"
    },
    {
      "name"  : "F.I.L",
      "album" : "VERI-US",
      "cover" : "assets/albums/veri-us.png",
      "link"  : "fil"
    },
    {
      "name"  : "Flower",
      "album" : "VERI-US",
      "cover" : "assets/albums/veri-us.png",
      "link"  : "flower"
    },
    {
      "name"  : "From Now",
      "album" : "VERI-ABLE",
      "cover" : "assets/albums/veri-able.png",
      "link"  : "from-now"
    },
    {
      "name"  : "G.B.T.B.",
      "album" : "FACE US",
      "cover" : "assets/albums/face-us.png",
      "link"  : "gbtb"

    },
    {
      "name"  : "G.B.T.B. (Strong Dragon Remix)",
      "album" : "G.B.T.B. Remix : VOL.1",
      "cover" : "assets/albums/gbtb-strong-dragon.png",
      "link"  : "gbtb-strong-dragon"
    },
    {
      "name"  : "Get Away",
      "album" : "SERIES 'O' [ROUND 1 : HALL]",
      "cover" : "assets/albums/series-o-hall.png",
      "link"  : "get-away"
    },
    {
      "name"  : "Get Outta My Way",
      "album" : "FACE US",
      "cover" : "assets/albums/face-us.png",
      "link"  : "get-outta-my-way"
    },
    {
      "name"  : "Get Ready",
      "album" : "VERI-ABLE",
      "cover" : "assets/albums/veri-able.png",
      "link"  : "get-ready"
    },
    {
      "name"  : "Heart Attack",
      "album" : "SERIES 'O' [ROUND 2 : HOLE]",
      "cover" : "assets/albums/series-o-hole.png",
      "link"  : "heart-attack"
    },
    {
      "name"  : "Hold me tight",
      "album" : "FACE US",
      "cover" : "assets/albums/face-us.png",
      "link"  : "hold-me-tight"
    },
    {
      "name"  : "Lay Back",
      "album" : "FACE ME",
      "cover" : "assets/albums/face-me.png",
      "link"  : "lay-back"
    },
    {
      "name"  : "Light Up",
      "album" : "VERI-ABLE",
      "cover" : "assets/albums/veri-able.png",
      "link"  : "light-up"
    },
    {
      "name"  : "Love Line",
      "album" : "VERI-ABLE",
      "cover" : "assets/albums/veri-able.png",
      "link"  : "love-line"
    },
    {
      "name"  : "Magic Hour",
      "album" : "Magic Hour - trinityACE",
      "cover" : "assets/albums/magic-hour.png",
      "link"  : "magic-hour"
    },
    {
      "name"  : "MOMENT",
      "album" : "FACE ME",
      "cover" : "assets/albums/face-me.png",
      "link"  : "moment"
    },
    {
      "name"  : "My Beauty",
      "album" : "Extraordinary You OST Part.2",
      "cover" : "assets/albums/my-beauty.png",
      "link"  : "my-beauty"
    },
    {
      "name"  : "MY FACE",
      "album" : "FACE US",
      "cover" : "assets/albums/face-us.png",
      "link"  : "my-face"
    },
    {
      "name"  : "Mystery light",
      "album" : "VERI-CHILL",
      "cover" : "assets/albums/veri-chill.png",
      "link"  : "mystery-light"
    },
    {
      "name"  : "Numbness",
      "album" : "SERIES 'O' [ROUND 1 : HALL]",
      "cover" : "assets/albums/series-o-hall.png",
      "link"  : "numbness"
    },
    {
      "name"  : "Paradise",
      "album" : "FACE ME",
      "cover" : "assets/albums/face-me.png",
      "link"  : "paradise"
    },
    {
      "name"  : "PHOTO",
      "album" : "FACE ME",
      "cover" : "assets/albums/face-me.png",
      "link"  : "photo"
    },
    {
      "name"  : "Privacy",
      "album" : "FACE YOU",
      "cover" : "assets/albums/face-you.png",
      "link"  : "privacy"
    },
    {
      "name"  : "Prom",
      "album" : "SERIES 'O' [ROUND 2 : HOLE]",
      "cover" : "assets/albums/series-o-hole.png",
      "link"  : "prom"
    },
    {
      "name"  : "Ring Ring Ring",
      "album" : "VERI-US",
      "cover" : "assets/albums/veri-us.png",
      "link"  : "ring-ring-ring"
    },
    {
      "name"  : "SKYDIVE",
      "album" : "FACE YOU",
      "cover" : "assets/albums/face-you.png",
      "link"  : "skydive"
    },
    {
      "name"  : "So gravity",
      "album" : "FACE US",
      "cover" : "assets/albums/face-us.png",
      "link"  : "so-gravity"
    },
    {
      "name"  : "Super Special",
      "album" : "NOW VERIVERY OST",
      "cover" : "assets/albums/super-special.png",
      "link"  : "super-special"
    },
    {
      "name"  : "Super Special (Acoustic Ver.)",
      "album" : "VERI-US",
      "cover" : "assets/albums/veri-us.png",
      "link"  : "super-special-acoustic"
    },
    {
      "name"  : "Tag Tag Tag",
      "album" : "VERI-CHILL",
      "cover" : "assets/albums/veri-chill.png",
      "link"  : "tag-tag-tag"
    },
    {
      "name"  : "Thunder",
      "album" : "FACE YOU",
      "cover" : "assets/albums/face-you.png",
      "link"  : "thunder"
    },
    {
      "name"  : "TRIGGER",
      "album" : "SERIES 'O' [ROUND 2 : HOLE]",
      "cover" : "assets/albums/series-o-hole.png",
      "link"  : "trigger"
    },
    {
      "name"  : "Underdog",
      "album" : "SERIES 'O' [ROUND 2 : HOLE]",
      "cover" : "assets/albums/series-o-hole.png",
      "link"  : "underdog"
    },
    {
      "name"  : "With Us",
      "album" : "Itaewon Class OST Part.7",
      "cover" : "assets/albums/with-us.png",
      "link"  : "with-us"
    }
  ];

  constructor() {
    this.songsBackup = this.songs;
  }

  private filterList(event: any) {
    let searchTerm: string = event.detail.value;

    this.songs = this.songsBackup.filter(song => {
      if (!searchTerm) {
        return this.songsBackup;
      }
      if (song.name && searchTerm) {
        return (song.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
