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
    moviesComp: boolean = true;

    constructor(private moviesService: MoviesService) {
        this.movies = moviesService.getMovies();
    }

    ngOnInit() {
    }

    handleAddMovie(movie) {
        console.log("movie-card movie:");
        console.log(movie);
        this.moviesService.addMovieServ(movie);
    }
}
