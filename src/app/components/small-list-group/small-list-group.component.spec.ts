import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallListGroupComponent } from './small-list-group.component';

describe('SmallListGroupComponent', () => {
  let component: SmallListGroupComponent;
  let fixture: ComponentFixture<SmallListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallListGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
