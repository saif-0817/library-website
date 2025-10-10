import { Component, Input } from '@angular/core';
import { Banner } from '../../../types/banner';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner-reusable',
  imports: [CommonModule],
  templateUrl: './banner-reusable.html',
  styleUrl: './banner-reusable.scss'
})
export class BannerReusable {
@Input()content: Banner = {};
@Input()searchBar:boolean = true;

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
