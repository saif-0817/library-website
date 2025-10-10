import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBooksReusable } from './section-books-reusable';

describe('SectionBooksReusable', () => {
  let component: SectionBooksReusable;
  let fixture: ComponentFixture<SectionBooksReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBooksReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBooksReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
