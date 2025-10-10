import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  imports: [],
  templateUrl: './genres.html',
  styleUrl: './genres.scss'
})
export class Genres {
// books-array.ts
 genres= [
  { bookImg: 'assets/images/books/book1.png', genre: 'Fiction', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Non-Fiction', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Science', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Biography', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Mystery', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Fantasy', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'History', link: '#' },
  { bookImg: 'assets/images/books/book1.png', genre: 'Romance', link: '#' }
];

constructor(private router:Router){

}

onSerach(genre:string){
  this.router.navigate(['/books',genre ])
}

}
