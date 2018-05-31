import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
//import { MoviesComponent } from '../movies/movies.component';
import { Movie } from '../movie';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() movie: Movie;
    // @Input('master') masterName: string;
    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        //   console.log(this.movie);
    }

    addMovie(movie) {
        console.log("movie-card movie:");
        console.log(movie);
        this.moviesService.addMovieServ(movie);
    }

    removeMovie(movie) {
        this.moviesService.removeChosenMovieServ(movie.id, movie.price);
    }
}
