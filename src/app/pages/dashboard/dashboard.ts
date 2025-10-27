import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollapseDirective, CollapseModule } from 'ngx-bootstrap/collapse';
import { Auth } from '../admin/auth';
@Component({
  selector: 'app-dashboard',
  imports: [ RouterOutlet, CollapseDirective, CollapseModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
isCollapsed = false;

constructor(private authService:Auth){}

logout(){
  this.authService.logOut();
}
}
