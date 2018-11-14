import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    releases: Object[] = [];

    constructor(private http: HttpClient) { }
    getNewReleases() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDHPhuiJYn4gwgXaACEcD5P2crnT76uqHYVZpBIOZF187SUXRXrc3e2PMJ25_b8MPnSZj6fWcqQXWnS0Ag'
        });

        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=15', {headers});
    }

    getArtist(term: string) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDHPhuiJYn4gwgXaACEcD5P2crnT76uqHYVZpBIOZF187SUXRXrc3e2PMJ25_b8MPnSZj6fWcqQXWnS0Ag'
        });
        return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {headers});
    }
}
