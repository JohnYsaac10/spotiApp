import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  opt: boolean;
  idArtist;
  artistDetail;
  topTracks;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.opt = true;
    this.activatedRoute.params.subscribe( params => {
      this.idArtist = params.id;
    });

    spotify.getPageArtist(this.idArtist).subscribe( data => {
      this.opt = true;
      this.artistDetail = data;
      this.opt = false;
      console.log(this.artistDetail);
    });

    spotify.getTopTrap(this.idArtist).subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    });
   }

  ngOnInit() {
  }

}
