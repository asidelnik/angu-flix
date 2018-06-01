import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { MoviesComponent } from './movies/movies.component';
// import { ChosenMoviesComponent } from './chosen-movies/chosen-movies.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', component: AppComponent,  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }