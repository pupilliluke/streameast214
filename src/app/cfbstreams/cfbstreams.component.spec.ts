import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbstreamsComponent } from './cfbstreams.component';

describe('CfbstreamsComponent', () => {
  let component: CfbstreamsComponent;
  let fixture: ComponentFixture<CfbstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbstreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfbstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
