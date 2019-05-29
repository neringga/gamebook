import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Ad {
  constructor(public id: string, public name: string, public validFrom: Date, public validUntil: Date, public imagePath: string) {
    this.id = id;
    this.name = name;
    this.validFrom = validFrom;
    this.validUntil = validUntil;
    this.imagePath = imagePath;
  }
}
@Component({
  selector: 'app-active-adds',
  templateUrl: './active-adds.component.html',
  styleUrls: ['./active-adds.component.scss']
})
export class ActiveAddsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAds(): Observable<Ad[]> {
    return of(
      [
        new Ad('123', 'Reklama 1', new Date(2019, 4, 25, 0, 0, 0), new Date(2019, 4, 30, 0, 0, 0), 'assets/perfume1.jpg'),
        new Ad('123', 'Reklama 2', new Date(2019, 4, 1, 0, 0, 0), new Date(2019, 5, 15, 0, 0, 0), 'assets/perfume2.jpg'),
        new Ad('123', 'Reklama 3', new Date(2019, 4, 25, 0, 0, 0), new Date(2019, 5, 1, 0, 0, 0), 'assets/perfume3.jpg'),
        new Ad('123', 'Reklama 4', new Date(2018, 11, 1, 0, 0, 0), new Date(2018, 11, 27, 0, 0, 0), 'assets/perfume4.jpg'),
        new Ad('123', 'Reklama 5', new Date(2019, 4, 25, 0, 0, 0), new Date(2019, 4, 27, 0, 0, 0), 'assets/perfume5.jpg'),
      ]
    );
  }

  isAdCloseToExpiring(validUntil: Date): boolean {
    const today = new Date();
    const diffTime = Math.abs(validUntil.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 2;
  }

  isAdExpired(validUntil: Date): boolean {
    const today = new Date();
    const diffTime = validUntil.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.error(diffDays);
    return diffDays <= 0;
  }



}
