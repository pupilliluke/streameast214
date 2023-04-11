import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cfbStreamsComponent } from './cfbstreams.component';

describe('CfbstreamsComponent', () => {
  let component: cfbStreamsComponent;
  let fixture: ComponentFixture<cfbStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cfbStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cfbStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
