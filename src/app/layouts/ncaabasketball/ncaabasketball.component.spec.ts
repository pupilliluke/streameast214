import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCAAbasketballComponent } from './ncaabasketball.component';

describe('NCAAbasketballComponent', () => {
  let component: NCAAbasketballComponent;
  let fixture: ComponentFixture<NCAAbasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NCAAbasketballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NCAAbasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
