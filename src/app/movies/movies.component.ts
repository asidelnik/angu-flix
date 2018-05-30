import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
   selector: 'app-movies',
   templateUrl: './movies.component.html',
   styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
   movies = new Array<Movie>();

   constructor(private moviesService: MoviesService) {
      this.movies = moviesService.getMovies();
   }

   ngOnInit() {
   }

   addMovie(movie) {
      console.log("movies:");      
      this.moviesService.addMovieServ(movie);
   }

}
