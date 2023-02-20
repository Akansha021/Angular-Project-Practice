import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttrialComponent } from './firsttrial.component';

describe('FirsttrialComponent', () => {
  let component: FirsttrialComponent;
  let fixture: ComponentFixture<FirsttrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsttrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsttrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
