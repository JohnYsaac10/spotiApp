import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  opt = true;

  constructor(private spoty: SpotifyService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.spoty.getArtist(term)
    .subscribe( data => {
      console.log(data);
      this.artists = data;
      this.opt = false;
    });
  }

}
