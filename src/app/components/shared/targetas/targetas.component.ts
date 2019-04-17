import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html'
})
export class TargetasComponent implements OnInit {


  

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPageArtist(item: any) {
    let artistID;
    if( item.type === 'artist' ) {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistID]);
  }

}
