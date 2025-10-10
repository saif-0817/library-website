import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-header',
  imports: [CarouselModule, RouterLink, CollapseDirective, CarouselModule, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
isCollapsed = true;


  constructor(private router:Router){

}

onSearch(search:string){
  if(search === null || search === ''){
    return;
  }

  console.log(search)
this.router.navigate(['/books', search])
}
}
