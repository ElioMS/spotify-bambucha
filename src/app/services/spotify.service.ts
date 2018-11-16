import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    constructor(private http: HttpClient) { }

    getQuery( query: string ) {
        const URL = `https://api.spotify.com/v1/${query}`;

        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQAY-Jr2Am9gEzJwlXdRZqNZWsTqpmj_H58Se3_iFfOw1Wl45V-K415AuG9QV637Jaw3mKrBlMekzdKidJE'
        });

        return this.http.get(URL, {headers});
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?limit=15')
            .pipe( map (data => {
                return data['albums'].items;
            }));
    }

    getArtist(term: string) {
        return this.getQuery(`search?q=${term}&type=artist&limit=15`)
            .pipe( map (data => {
                return data['artists'].items;
            }));
    }
}
