import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReusable } from './service-reusable';

describe('ServiceReusable', () => {
  let component: ServiceReusable;
  let fixture: ComponentFixture<ServiceReusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceReusable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceReusable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
