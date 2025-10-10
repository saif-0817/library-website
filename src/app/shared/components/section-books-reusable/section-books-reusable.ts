import { Component, Input, SimpleChanges } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SectionBooks } from '../../../types/section-books';
import { CommonModule } from '@angular/common';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BookDetails } from '../../modal/book-details/book-details';
@Component({
  selector: 'app-section-books-reusable',
  imports: [CarouselModule, CommonModule, ModalModule],
   providers: [BsModalService],
  templateUrl: './section-books-reusable.html',
  styleUrl: './section-books-reusable.scss'
})
export class SectionBooksReusable {

 @Input() displayBooks: SectionBooks = {};
  customOptions!: OwlOptions;

  constructor(private modalService: BsModalService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['displayBooks']) {
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        margin:20,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive: {
          0: { items: 1 },
          400: { items: 2 },
          740: { items: 3 },
          940: { items: 5 }
        },
        nav: true
      };

  
    }
  }

onBookDetails(details: any) {
 this.modalService.show(BookDetails, {
    initialState: {
      bookToShow: details,
     
    },
     class: 'modal-xl'
  });
}

}