import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent, AccordionModule, AccordionPanelComponent } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-faq',
  imports: [ AccordionComponent, AccordionPanelComponent,AccordionModule, CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
 faqs = [
    {
      question: 'How can I become a member?',
      answer:
        'You can apply for membership online or visit our library with a valid ID and address proof.',
      isOpen: true
    },
    {
      question: 'Can I renew books online?',
      answer:
        'Yes, you can renew books through our online member portal or by calling the help desk.',
      isOpen: false
    },
    {
      question: 'Do you organize reading events?',
      answer:
        'We regularly organize book clubs, storytelling sessions, and author meetups for members.',
      isOpen: false
    }
  ];
}
