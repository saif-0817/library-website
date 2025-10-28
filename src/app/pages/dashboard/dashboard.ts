import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseDirective, CollapseModule } from 'ngx-bootstrap/collapse';
import { Auth } from '../admin/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CollapseDirective, CollapseModule, CommonModule, RouterLinkWithHref, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
isCollapsed = false;

constructor(private authService:Auth, private router:Router){}

logout(){
  this.authService.logOut();
}

onNavigate(arg:string){
  this.router.navigateByUrl('/dashboard/'+arg);
  console.log(arg)
}
}
