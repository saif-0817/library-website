import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedBooks } from './searched-books';

describe('SearchedBooks', () => {
  let component: SearchedBooks;
  let fixture: ComponentFixture<SearchedBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
