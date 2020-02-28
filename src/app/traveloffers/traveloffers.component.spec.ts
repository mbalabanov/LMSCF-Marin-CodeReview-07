import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveloffersComponent } from './traveloffers.component';

describe('TraveloffersComponent', () => {
  let component: TraveloffersComponent;
  let fixture: ComponentFixture<TraveloffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraveloffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
