import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrendsComponent } from './add-trends.component';

describe('AddTrendsComponent', () => {
  let component: AddTrendsComponent;
  let fixture: ComponentFixture<AddTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
