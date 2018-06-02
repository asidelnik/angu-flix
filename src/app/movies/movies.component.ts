import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit, OnDestroy {
    movies = new Array<Movie>();
    moviesComp: boolean = true;
    filterTerm: string = "";
    title = {title: "Choose movies"};

    constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
        this.movies = moviesService.getMovies();
        // this.title = "Choose movies";
    }

    ngOnInit() {
        this.route.queryParams.subscribe(queryParams => {
            this.filterTerm = queryParams.name;
        });
    }

    handleAddMovie(movie) {
        this.moviesService.addMovieServ(movie);
    }

    ngOnDestroy() {
        this.filterTerm = "";
    }

}
