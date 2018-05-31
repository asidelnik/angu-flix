import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
   selector: 'app-chosen-movies',
   templateUrl: './chosen-movies.component.html',
   styleUrls: ['./chosen-movies.component.scss']
})
export class ChosenMoviesComponent implements OnInit {
   chosenMovies = new Array<Movie>();
   budget = this.moviesService.user.budget;

   constructor(private moviesService: MoviesService) {
      this.chosenMovies = moviesService.getChosenMovies();
      this.budget = this.moviesService.getBudget();
   }

   getBudget() {
      return this.moviesService.user.budget;
   }

   ngOnInit() {
   }

   removeChosenMovie(id, price) {
      this.moviesService.removeChosenMovieServ(id, price);
   }

}
