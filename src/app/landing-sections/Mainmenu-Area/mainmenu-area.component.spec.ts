import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenuAreaComponent } from './mainmenu-area.component';

describe('MainmenuAreaComponent', () => {
  let component: MainmenuAreaComponent;
  let fixture: ComponentFixture<MainmenuAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenuAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
