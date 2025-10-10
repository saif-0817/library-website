import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerReusable } from './banner-reusable';

describe('BannerReusable', () => {
  let component: BannerReusable;
  let fixture: ComponentFixture<BannerReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
