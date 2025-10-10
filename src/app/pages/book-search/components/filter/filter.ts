import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, ButtonsModule, BsDropdownModule, ModalModule, CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
 radioModel = 'title';
}
