import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutReusable } from './about-reusable';

describe('AboutReusable', () => {
  let component: AboutReusable;
  let fixture: ComponentFixture<AboutReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
