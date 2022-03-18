import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelmanagmentComponent } from './hotelmanagment.component';

describe('HotelmanagmentComponent', () => {
  let component: HotelmanagmentComponent;
  let fixture: ComponentFixture<HotelmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
