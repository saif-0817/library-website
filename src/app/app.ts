import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './pages/admin/auth';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-search');
   constructor(private authService: Auth) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
