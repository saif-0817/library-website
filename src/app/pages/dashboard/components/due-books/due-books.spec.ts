import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueBooks } from './due-books';

describe('DueBooks', () => {
  let component: DueBooks;
  let fixture: ComponentFixture<DueBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DueBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
