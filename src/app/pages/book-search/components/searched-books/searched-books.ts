import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BookDetails } from '../../../../shared/modal/book-details/book-details';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-searched-books',
  imports: [FormsModule, ButtonsModule, BsDropdownModule, ModalModule, CommonModule, CarouselModule],
   providers: [BsModalService],
  templateUrl: './searched-books.html',
  styleUrl: './searched-books.scss'
})
export class SearchedBooks {

    constructor(private modalService: BsModalService) {}
 books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    section: 'A-2-15',
    bookNumber: 'LIB-BN-001523',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    section: 'B-1-10',
    bookNumber: 'LIB-BN-001524',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    section: 'C-3-22',
    bookNumber: 'LIB-BN-001525',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    section: 'A-5-09',
    bookNumber: 'LIB-BN-001526',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    section: 'D-2-13',
    bookNumber: 'LIB-BN-001527',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    section: 'B-3-11',
    bookNumber: 'LIB-BN-001528',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Philosophy',
    section: 'E-1-05',
    bookNumber: 'LIB-BN-001529',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    section: 'C-4-17',
    bookNumber: 'LIB-BN-001530',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Harry Potter and the Sorcerer’s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    section: 'B-2-08',
    bookNumber: 'LIB-BN-001531',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    genre: 'Drama',
    section: 'A-1-20',
    bookNumber: 'LIB-BN-001532',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Historical Fiction',
    section: 'C-2-14',
    bookNumber: 'LIB-BN-001533',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    genre: 'Drama',
    section: 'D-4-12',
    bookNumber: 'LIB-BN-001534',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: 'Adventure',
    section: 'E-3-19',
    bookNumber: 'LIB-BN-001535',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Sci-Fi',
    section: 'B-4-07',
    bookNumber: 'LIB-BN-001536',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    section: 'C-5-06',
    bookNumber: 'LIB-BN-001537',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    section: 'E-2-03',
    bookNumber: 'LIB-BN-001538',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    section: 'F-1-02',
    bookNumber: 'LIB-BN-001539',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Psychological Thriller',
    section: 'G-2-09',
    bookNumber: 'LIB-BN-001540',
    availability: 'Issued',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    section: 'H-3-04',
    bookNumber: 'LIB-BN-001541',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    section: 'H-5-01',
    bookNumber: 'LIB-BN-001542',
    availability: 'Available',
    image: 'assets/images/books/book1.png'
  }
];

onBookDetails(details: any) {
 this.modalService.show(BookDetails, {
    initialState: {
      bookToShow: details,
     
    },
     class: 'modal-xl'
  });
}
}
