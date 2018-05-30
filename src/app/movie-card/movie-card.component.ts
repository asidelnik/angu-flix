import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() movie: Movie;
    // @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
    //   console.log(this.movie);
  }
  
//   addMoviePar(movie) {
//     console.log("movies:");      
//     this.moviesService.addMovieServ(movie);
//  }
}
