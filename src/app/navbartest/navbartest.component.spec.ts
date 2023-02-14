import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartestComponent } from './navbartest.component';

describe('NavbartestComponent', () => {
  let component: NavbartestComponent;
  let fixture: ComponentFixture<NavbartestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
