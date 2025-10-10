import { Component, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OwlOptions, CarouselModule,CarouselComponent  } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-banner',
  imports: [CarouselModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',

})
export class Banner {
customOptions!: OwlOptions;
modalRef?: BsModalRef;
  @ViewChild('owlCarousel', { static: false }) owlCarousel?: CarouselComponent;
  constructor(){
 
 }


 ngOnInit(){
         this.customOptions = {
  loop: true,
  margin: 50,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  nav: true,
  navSpeed: 700,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>'
  ],
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    400: {
      items: 1,
      stagePadding: 0
    },
    740: {
      items: 1,
      stagePadding: 100
    },
    1000: {
      items: 1,
      stagePadding: 200
    },
    1400: {
      items: 1,
      stagePadding: 300 // optional for very large displays
    }
  }
};
 }

  ngAfterViewInit() {
    // Force rce-render after the DOM is ready
console.log(this.owlCarousel)

  }
}
