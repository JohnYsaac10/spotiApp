import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAzmVoxWX516i7K5jj9I39sRS5T2Kdal6a1ju4PgEejIygNnjJWZcALkS1ccjdC3VtBtvKr0Y-4gtAvtEo'
    });
    return this.http.get(url, {headers});

  }

  getRelease() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map( (data: any) => data.albums.items ));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
    .pipe(map( (data: any) => data.artists.items ));
  }

  getPageArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map( (data: any) => data.artists.items ));
  }

  getTopTrap(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map( (data: any) => data.tracks ));
  }
}
