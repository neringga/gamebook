import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAddsComponent } from './active-adds.component';
import { ActiveAdService } from './active-ad.service';

import { Mock } from 'ts-mocks';
import { of } from 'rxjs';
import { Ad } from './Ad.class';

fdescribe('ActiveAddsComponent', () => {
  let component: ActiveAddsComponent;
  let fixture: ComponentFixture<ActiveAddsComponent>;
  let mockAdService: Mock<ActiveAdService>;

  const addDaysToDate = (days: number, date: Date) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  beforeEach(async(() => {
    mockAdService = new Mock<ActiveAdService>({ getAds: () => of([] as Ad[]) });
    TestBed.configureTestingModule({
      declarations: [ ActiveAddsComponent ],
      providers: [
        { provide: ActiveAdService, useFactory: () => mockAdService.Object }
      ]
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

  it('should determine when an ad is close to expiration I', () => {
    const today = new Date();
    const testExpirationDate = today;
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is close to expiration II', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(component.closeToExpRange - 5, today);
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is close to expiration II', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(component.closeToExpRange - 1, today);
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is close to expiration III', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(component.closeToExpRange, today);
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is close to expiration IV', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(component.closeToExpRange + 1, today);
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(false);
  });

  it('should determine when an ad is close to expiration V', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(component.closeToExpRange + 2, today);
    const isAdExpired = component.isAdCloseToExpiring(testExpirationDate);
    expect(isAdExpired).toEqual(false);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = today;
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = today;
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(-1, today);
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(-5, today);
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(true);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(1, today);
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(false);
  });

  it('should determine when an ad is expired', () => {
    const today = new Date();
    const testExpirationDate = addDaysToDate(5, today);
    const isAdExpired = component.isAdExpired(testExpirationDate);
    expect(isAdExpired).toEqual(false);
  });

  it('should get the ads from service', done => {
    const testAd = new Ad('', '', new Date(), new Date(), '');
    mockAdService.setup(s => s.getAds).is(() => of([testAd]));
    component.getAds().subscribe(result => {
      expect(result[0]).toEqual(testAd);
      done();
    });
  });
});
