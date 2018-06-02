import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'app-gallery-header',
    templateUrl: './gallery-header.component.html',
    styleUrls: ['./gallery-header.component.scss']
})
export class GalleryHeaderComponent implements OnInit {
    filterTerm: string;
    @Input() title;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router, ) {
    }

    ngOnInit() {
    }

    onFilterChanged(filterString) {
        this.router.navigate(['.'], { queryParams: { name: filterString } });
    }
}