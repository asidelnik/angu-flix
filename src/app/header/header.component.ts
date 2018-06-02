import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    budget = this.moviesService.user.budget;
    constructor(private moviesService: MoviesService) {
        this.budget = this.moviesService.getBudget();
    }

    getBudget() {
        return this.moviesService.user.budget;
    }

    ngOnInit() {
    }

}
