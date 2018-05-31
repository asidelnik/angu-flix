import { Movie } from './movie';

export class User {
   public name: string;
   public budget: number;
   public chosenMovies: Array<Movie> = new Array<Movie>();

   constructor(name: string, budget: number, chosenMovies: Array<Movie>) {
       this.name = name;
       this.budget = budget;
       this.chosenMovies = new Array<Movie>();
   }
}