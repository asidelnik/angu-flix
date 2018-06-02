import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MdcAppBarModule } from '@angular-mdc/web';
// import {MDCTopAppBar} from '@material/top-app-bar/index';

// import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies/movies.component';
import { ChosenMoviesComponent } from './chosen-movies/chosen-movies.component';
import { FiltersComponent } from './filters/filters.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { GalleryHeaderComponent } from './gallery-header/gallery-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ChosenMoviesComponent,
    FiltersComponent,
    MovieCardComponent,
    FilterPipe,
    HeaderComponent,
    GalleryHeaderComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    AppRoutingModule,
    MdcAppBarModule
  ],
  
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//exports: [RouterModule],
//imports: [RouterModule.forRoot(routes),