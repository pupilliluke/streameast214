import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbastreamsComponent } from './nbastreams.component';

describe('NbastreamsComponent', () => {
  let component: NbastreamsComponent;
  let fixture: ComponentFixture<NbastreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbastreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbastreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
