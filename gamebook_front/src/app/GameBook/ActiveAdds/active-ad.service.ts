import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad } from './Ad.class';

@Injectable({
  providedIn: 'root'
})
export class ActiveAdService {

  constructor() { }

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
}
