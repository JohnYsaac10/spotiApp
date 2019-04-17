import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  opt = true;

  newReleases: any[];

  constructor(private spoty: SpotifyService) {
    this.spoty.getRelease().subscribe( data => {
      this.newReleases = data;
      console.log(data);
      this.opt = false;
    });
  }

  ngOnInit() {
  }

}
