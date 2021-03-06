import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterString: string): Array<Movie> {
    return filterString == undefined ? movies : movies.filter((movie) => movie.title.toLowerCase().includes(filterString.toLowerCase()));
  }

}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return null;
//   }

// }
