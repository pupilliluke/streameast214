import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingNavBarComponent } from './upcoming-nav-bar.component';

describe('UpcomingNavBarComponent', () => {
  let component: UpcomingNavBarComponent;
  let fixture: ComponentFixture<UpcomingNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
