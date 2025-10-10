import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaReusable } from './cta-reusable';

describe('CtaReusable', () => {
  let component: CtaReusable;
  let fixture: ComponentFixture<CtaReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
