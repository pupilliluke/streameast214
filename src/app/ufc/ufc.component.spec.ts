import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UFCComponent } from './ufc.component';

describe('UFCComponent', () => {
  let component: UFCComponent;
  let fixture: ComponentFixture<UFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UFCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
