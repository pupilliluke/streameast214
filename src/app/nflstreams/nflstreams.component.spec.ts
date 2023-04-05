import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflstreamsComponent } from './nflstreams.component';

describe('NflstreamsComponent', () => {
  let component: NflstreamsComponent;
  let fixture: ComponentFixture<NflstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflstreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
