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
    // budget = this.moviesService.user.budget;
    chosenMoviesComp: boolean = true;
    title = {title: "Choosen movies"};

    constructor(private moviesService: MoviesService) {
        this.movies = moviesService.getChosenMovies();
        // this.title = "Choosen movies";
        // this.budget = this.moviesService.getBudget();
    }

    // getBudget() {
    //     return this.moviesService.user.budget;
    // }

    ngOnInit() {
    }

    handleRemoveMovie(movie) {
        console.log("movie-card movie:");
        console.log(movie);
        this.moviesService.removeChosenMovieServ(movie.id, movie.price);
    }
}


// removeMovie(movie) {
//     this.moviesService.removeChosenMovieServ(movie.id, movie.price);
// }