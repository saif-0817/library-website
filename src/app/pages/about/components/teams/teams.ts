import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-teams',
  imports: [CarouselModule, CommonModule],
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class Teams {
  customOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
  '<i class="fa fa-chevron-left"></i>',
  '<i class="fa fa-chevron-right"></i>'
],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };

  teamMembers = [
    {
      name: 'Albert Pain',
      role: 'Librarian',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Librarian with 10+ years of experienc.'
    },
    {
      name: 'Jane Doe',
      role: 'Assistant Librarian',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Helps students and visitors find the right books and resources.'
    },
    {
      name: 'John Smith',
      role: 'Archivist',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Specialist in archiving rare books and historical documents.'
    }
    ,
    {
      name: 'John Smith',
      role: 'Archivist',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Specialist in archiving rare books and historical documents.'
    },
     {
      name: 'John Smith',
      role: 'Archivist',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Specialist in archiving rare books and historical documents.'
    }
  ,
   {
      name: 'John Smith',
      role: 'Archivist',
      image: 'assets/images/about/team/librarian.jpg',
      description: 'Specialist in archiving rare books and historical documents.'
    }
  ];
}

