import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-issued-book',
  imports: [NgxDatatableModule],
  templateUrl: './issued-book.html',
  styleUrl: './issued-book.scss'
})
export class IssuedBook {
currentPage = 0;

onPage(event: any) {
  this.currentPage = event.offset;
}
rows = [
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' },
  { name: 'Sophia', gender: 'Female', company: 'Google' },
  { name: 'Liam', gender: 'Male', company: 'Amazon' },
  { name: 'Olivia', gender: 'Female', company: 'Netflix' },
  { name: 'Noah', gender: 'Male', company: 'Tesla' },
  { name: 'Ava', gender: 'Female', company: 'Microsoft' },
  { name: 'Ethan', gender: 'Male', company: 'Adobe' },
  { name: 'Isabella', gender: 'Female', company: 'Apple' },
  { name: 'Mason', gender: 'Male', company: 'IBM' },
  { name: 'Mia', gender: 'Female', company: 'Intel' },
  { name: 'Lucas', gender: 'Male', company: 'HP' },
  { name: 'Amelia', gender: 'Female', company: 'Dell' },
  { name: 'Logan', gender: 'Male', company: 'Meta' },
  { name: 'Charlotte', gender: 'Female', company: 'Accenture' },
  { name: 'Elijah', gender: 'Male', company: 'Infosys' },
  { name: 'Harper', gender: 'Female', company: 'TCS' },
  { name: 'James', gender: 'Male', company: 'Capgemini' },
  { name: 'Evelyn', gender: 'Female', company: 'Wipro' },
  { name: 'Benjamin', gender: 'Male', company: 'Oracle' },
  { name: 'Abigail', gender: 'Female', company: 'Cognizant' },
  { name: 'Henry', gender: 'Male', company: 'SAP' }
];

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' },
  ];
onNextPage() {
  if ((this.currentPage + 1) * 5 < this.rows.length) {
    this.currentPage++;
  }
}

onPrevPage() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}

}
