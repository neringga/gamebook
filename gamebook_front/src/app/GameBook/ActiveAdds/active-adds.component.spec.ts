import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAddsComponent } from './active-adds.component';

describe('ActiveAddsComponent', () => {
  let component: ActiveAddsComponent;
  let fixture: ComponentFixture<ActiveAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
