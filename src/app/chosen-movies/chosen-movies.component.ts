import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
    selector: 'app-chosen-movies',
    templateUrl: './chosen-movies.component.html',
    styleUrls: ['./chosen-movies.component.scss']
})
export class ChosenMoviesComponent implements OnInit {
    // used to be chosenMovies, changed it to be able to bind to movie-card
    movies = new Array<Movie>();
    budget = this.moviesService.user.budget;
    chosenMoviesComp: boolean = true;

    constructor(private moviesService: MoviesService) {
        this.movies = moviesService.getChosenMovies();
        this.budget = this.moviesService.getBudget();
    }

    getBudget() {
        return this.moviesService.user.budget;
    }

    removeChosenMovie(id, price) {
        this.moviesService.removeChosenMovieServ(id, price);
    }

    ngOnInit() {
    }



}
