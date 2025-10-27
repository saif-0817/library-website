import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBook } from './issued-book';

describe('IssuedBook', () => {
  let component: IssuedBook;
  let fixture: ComponentFixture<IssuedBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuedBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
