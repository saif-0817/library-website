import { Component } from '@angular/core';
import { SectionBooks } from '../../../../types/section-books';
import { SectionBooksReusable } from "../../../../shared/components/section-books-reusable/section-books-reusable";

@Component({
  selector: 'app-popular-classics',
  imports: [SectionBooksReusable],
  templateUrl: './popular-classics.html',
  styleUrl: './popular-classics.scss'
})
export class PopularClassics {
popularClassics: SectionBooks = {
    title: "Popular Classics",
  books: [
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    availablity: 'Available', 
    genre: 'Non Fiction', 
    section: 'Section A-2-15', 
    isbn: 'LIB-BN-001523'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'To Kill a Mockingbird', 
    author: 'Harper Lee', 
    availablity: 'Issued', 
    genre: 'Fiction', 
    section: 'Section B-1-09', 
    isbn: 'LIB-BN-001524'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: '1984', 
    author: 'George Orwell', 
    availablity: 'Available', 
    genre: 'Dystopian', 
    section: 'Section C-3-12', 
    isbn: 'LIB-BN-001525'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'Pride and Prejudice', 
    author: 'Jane Austen', 
    availablity: 'Available', 
    genre: 'Romance', 
    section: 'Section D-2-04', 
    isbn: 'LIB-BN-001526'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'The Catcher in the Rye', 
    author: 'J.D. Salinger', 
    availablity: 'Issued', 
    genre: 'Classic', 
    section: 'Section E-1-08', 
    isbn: 'LIB-BN-001527'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'Moby Dick', 
    author: 'Herman Melville', 
    availablity: 'Available', 
    genre: 'Adventure', 
    section: 'Section F-4-11', 
    isbn: 'LIB-BN-001528'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'The Alchemist', 
    author: 'Paulo Coelho', 
    availablity: 'Available', 
    genre: 'Philosophy', 
    section: 'Section G-2-03', 
    isbn: 'LIB-BN-001529'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'The Hobbit', 
    author: 'J.R.R. Tolkien', 
    availablity: 'Issued', 
    genre: 'Fantasy', 
    section: 'Section H-5-02', 
    isbn: 'LIB-BN-001530'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'The Power of Habit', 
    author: 'Charles Duhigg', 
    availablity: 'Available', 
    genre: 'Self Help', 
    section: 'Section I-1-07', 
    isbn: 'LIB-BN-001531'  
  },
  { 
    bookImg: 'assets/images/books/book1.png', 
    bookTitle: 'Sapiens: A Brief History of Humankind', 
    author: 'Yuval Noah Harari', 
    availablity: 'Available', 
    genre: 'History', 
    section: 'Section J-3-10', 
    isbn: 'LIB-BN-001532'  
  }
]

  };
}
