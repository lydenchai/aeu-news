import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { Slids } from '../types/slids';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseCrudService<Slids> {
  // Fake data array
  private fakeDataSlid: Slids[] = [
    {
      id: 1,
      title:
        'កិច្ចទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង',
        img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        date: 'October 5, 2023',

     },
    {
      id: 2,
      title: 'The Best Restaurants in Paris',
        img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56_1737168404.jpg',
        date: 'October 5, 2023',

    },
    {
      id: 3,
      title: 'Top 10 Hiking Trails in the World',
        img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        date: 'October 5, 2023',

     },
  ];

  // Get a list of news items
  getList(): Observable<Slids[]> {
    return of(this.fakeDataSlid);
  }

  // Get a news item by ID
  getOne(id: number): Observable<Slids | undefined> {
    const slidsItem = this.fakeDataSlid.find((item) => item.id === id);
    return of(slidsItem);
  }
}
