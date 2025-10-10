import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularClassics } from './popular-classics';

describe('PopularClassics', () => {
  let component: PopularClassics;
  let fixture: ComponentFixture<PopularClassics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularClassics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularClassics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
