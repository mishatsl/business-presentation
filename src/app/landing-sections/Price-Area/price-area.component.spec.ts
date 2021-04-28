import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAreaComponent } from './price-area.component';

describe('PriceAreaComponent', () => {
  let component: PriceAreaComponent;
  let fixture: ComponentFixture<PriceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
