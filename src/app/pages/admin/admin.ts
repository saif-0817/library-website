import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from './auth';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
  constructor(private authService:Auth){}
  onSubmit(form:NgForm){
  
    if(form.invalid){
      return;
    }

    this.authService.signIn(form.value.email, form.value.password);
    form.reset();
      console.log(form);
     
  }
}
