import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStreamsComponent } from './mlb-streams.component';

describe('MlbStreamsComponent', () => {
  let component: MlbStreamsComponent;
  let fixture: ComponentFixture<MlbStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
