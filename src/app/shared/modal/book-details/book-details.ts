import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { BookDescription } from "./components/book-description/book-description";

@Component({
  selector: 'app-book-details',
  imports: [Banner, BookDescription],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {
bookToShow: any;

ngOnInit(){
  console.log(this.bookToShow)
}

}
