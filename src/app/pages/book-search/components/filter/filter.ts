import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';
@Component({
  selector: 'app-filter',
  imports: [FormsModule, ButtonsModule, BsDropdownModule, ModalModule, CommonModule, TabsModule,  AccordionComponent, AccordionPanelComponent],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
 radioModel = 'title';
}
