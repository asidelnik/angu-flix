import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
    movies = new Array<Movie>();
    moviesComp: boolean = true;
    filterTerm: string;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
        this.movies = moviesService.getMovies();
    }

    ngOnInit() {
        this.route.queryParams.subscribe(queryParams => {
            this.filterTerm = queryParams.name;
        });
    }

    onFilterChanged(filterString) {
        this.router.navigate(['.'], { queryParams: { name: filterString } });
    }

    handleAddMovie(movie) {
        this.moviesService.addMovieServ(movie);
    }
}
