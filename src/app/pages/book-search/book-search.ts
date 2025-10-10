import { Component } from '@angular/core';
import { SearchedBooks } from "./components/searched-books/searched-books";
import { Filter } from "./components/filter/filter";


@Component({
  selector: 'app-book-search',
  imports: [SearchedBooks, Filter],
  templateUrl: './book-search.html',
  styleUrl: './book-search.scss'
})
export class BookSearch {

}
