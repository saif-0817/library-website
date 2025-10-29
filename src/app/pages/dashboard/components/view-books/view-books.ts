import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-books',
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './view-books.html',
  styleUrl: './view-books.scss'
})
export class ViewBooks {
currentPage = 0;

onPage(event: any) {
  this.currentPage = event.offset;
}


rows = [
  {
    libNo: 'L-001',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    section: 'Fiction',
    price: '$12.99',
    status: 'Available',
    stock: 12,
    issued: 5
  },
  {
    libNo: 'L-002',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    section: 'Literature',
    price: '$10.49',
    status: 'Out of Stock',
    stock: 0,
    issued: 7
  },
  {
    libNo: 'L-003',
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    section: 'Politics',
    price: '$11.99',
    status: 'Available',
    stock: 8,
    issued: 2
  },
  {
    libNo: 'L-004',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    section: 'Fiction',
    price: '$9.99',
    status: 'Available',
    stock: 15,
    issued: 3
  },
  {
    libNo: 'L-005',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Philosophical',
    section: 'Motivational',
    price: '$12.49',
    status: 'Available',
    stock: 6,
    issued: 4
  },
  {
    libNo: 'L-006',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    section: 'Children',
    price: '$15.99',
    status: 'Out of Stock',
    stock: 0,
    issued: 10
  },
  {
    libNo: 'L-007',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    section: 'Non-Fiction',
    price: '$17.99',
    status: 'Available',
    stock: 6,
    issued: 3
  },
  {
    libNo: 'L-008',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    section: 'Motivational',
    price: '$18.25',
    status: 'Out of Stock',
    stock: 0,
    issued: 9
  },
  {
    libNo: 'L-009',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    genre: 'Self-help',
    section: 'Motivational',
    price: '$12.85',
    status: 'Available',
    stock: 10,
    issued: 2
  }
];


columns = [
  { prop: 'libNo', name: 'Library No' },
  { prop: 'title', name: 'Book Title' },
  { prop: 'author', name: 'Author' },
  { prop: 'genre', name: 'Genre' },
  { prop: 'section', name: 'Section' },
  { prop: 'price', name: 'Price' },
  { prop: 'status', name: 'Status' },
  { prop: 'stock', name: 'Number of Books' },
  { prop: 'issued', name: 'Issued' }
];

onNextPage() {
  if ((this.currentPage + 1) * 5 < this.rows.length) {
    this.currentPage++;
  }
}

onPrevPage() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}

onClickRow(event:any){
  if(event.type === 'click') console.log(event.row)
}
}
