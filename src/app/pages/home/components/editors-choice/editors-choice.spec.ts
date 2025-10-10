import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsChoice } from './editors-choice';

describe('EditorsChoice', () => {
  let component: EditorsChoice;
  let fixture: ComponentFixture<EditorsChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorsChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsChoice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
