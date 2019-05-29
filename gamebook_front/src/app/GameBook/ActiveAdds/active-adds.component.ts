import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActiveAdService } from './active-ad.service';
import { Ad } from './Ad.class';

@Component({
  selector: 'app-active-adds',
  templateUrl: './active-adds.component.html',
  styleUrls: ['./active-adds.component.scss']
})
export class ActiveAddsComponent implements OnInit {

  closeToExpRange = 2;

  constructor(private adService: ActiveAdService) { }

  ngOnInit() {
  }

  getAds(): Observable<Ad[]> {
    return this.adService.getAds();
  }

  isAdCloseToExpiring(validUntil: Date): boolean {
    return this.getDiffDays(validUntil) <= this.closeToExpRange;
  }

  isAdExpired(validUntil: Date): boolean {
    return this.getDiffDays(validUntil) <= 0;
  }

  private getDiffDays(dateUntil: Date): number {
    const today = new Date();
    const diffTime = dateUntil.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}
