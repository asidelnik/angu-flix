import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
    @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();
    @Output() movieRemoved: EventEmitter<Movie> = new EventEmitter();
    // @Input('master') masterName: string;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        //   console.log(this.movie);
    }

    addMovie(movie) {
        this.movieAdded.emit(movie);
    }

    removeMovie(movie) {
        this.movieRemoved.emit(movie);
    }
}
