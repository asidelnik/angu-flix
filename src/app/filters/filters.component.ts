import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    @Input() filterString: string;
    @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();


    constructor(private moviesService: MoviesService) {}

    changeFilter() {
        this.filterChanged.emit(this.filterString);
    }

    ngOnInit() {
    }
}
