import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRegistrationComponent } from './detail-registration.component';

describe('DetailRegistrationComponent', () => {
  let component: DetailRegistrationComponent;
  let fixture: ComponentFixture<DetailRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRegistrationComponent]
    });
    fixture = TestBed.createComponent(DetailRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
