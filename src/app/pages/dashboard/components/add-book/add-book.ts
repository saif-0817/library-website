import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-book',
  imports: [NgMultiSelectDropDownModule, FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.scss'
})
export class AddBook {
 dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit() {
 this.dropdownList = [
  { item_id: 1, item_text: 'Hindi' },
  { item_id: 2, item_text: 'English' },
  { item_id: 3, item_text: 'Bengali' },
  { item_id: 4, item_text: 'Tamil' },
  { item_id: 5, item_text: 'Telugu' },
  { item_id: 6, item_text: 'Marathi' },
  { item_id: 7, item_text: 'Gujarati' },
  { item_id: 8, item_text: 'Punjabi' },
  { item_id: 9, item_text: 'Malayalam' },
  { item_id: 10, item_text: 'Urdu' }
];


    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

   onItemSelect(item: any) {
    console.log('Selected:', item);
  }

  onSelectAll(items: any) {
    console.log('All Selected:', items);
  }
}
