import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner"
import { ContactInfo } from "./components/contact-info/contact-info";
import { Form } from "./components/form/form";
import { WorkingHours } from "./components/working-hours/working-hours";
import { Faq } from "./components/faq/faq";
import { About } from './components/about/about';
@Component({
  selector: 'app-contact',
  imports: [ Banner, About, ContactInfo, Form, WorkingHours, Faq],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
 
}
