import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
    artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  searchByArtist(term: string) {
      this.spotify.getArtist(term)
          .subscribe(response => {
              this.artists = response;
          });
  }

}
