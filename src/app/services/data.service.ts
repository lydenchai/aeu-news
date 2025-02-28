import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { News } from '../types/news';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseCrudService<News> {
  private fakeData: News[] = [
    {
      id: 1,
      title:
        'កិច្ចទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង',
      category: 'news',
      description: 'Explore the top tourist attractions around the world.',
      content: 'ព្រឹកថ្ងៃព្រហស្បតិ៍ ៣រោច ខែបុស្ស ឆ្នាំរោង ឆស័ក ព.ស.២៥៦៨...',
      date: 'October 5, 2023',
      img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
      save: false,
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56_1737168404.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55_1737168570.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56%20(2)_1737168771.jpg',
      ],
    },
    {
      id: 2,
      title: 'The Best Restaurants in Paris',
      category: 'news',
      description: 'Discover the finest dining experiences in Paris.',
      content: 'Duis aute irure dolor in reprehenderit in voluptate...',
      date: 'October 6, 2023',
      img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
      save: false,
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56_1737168404.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55_1737168570.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56%20(2)_1737168771.jpg',
      ],
    },
    {
      id: 3,
      title: 'The Best Restaurants in Paris',
      category: 'event',
      description: 'Discover the finest dining experiences in Paris.',
      content: 'Duis aute irure dolor in reprehenderit in voluptate...',
      date: 'October 6, 2023',
      img:'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
      save: false,
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56_1737168404.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55_1737168570.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56%20(2)_1737168771.jpg',
      ],
    },
  ];

  private savedNews: News[] = []; // List of saved news items

  // Get all news items
  getList(): Observable<News[]> {
    return of(this.fakeData);
  }

  // Get a single news item by ID
  getOne(id: number): Observable<News | undefined> {
    const newsItem = this.fakeData.find((item) => item.id === id);
    return of(newsItem);
  }

  // Toggle save status and update savedNews list
  toggleSave(id: number): Observable<boolean> {
    const newsItem = this.fakeData.find((item) => item.id === id);
    if (newsItem) {
      newsItem.save = !newsItem.save; // Toggle save status
      if (newsItem.save) {
        this.savedNews.push(newsItem); // Add to saved list
      } else {
        this.savedNews = this.savedNews.filter((item) => item.id !== id); // Remove from saved list
      }
      return of(newsItem.save);
    }
    return of(false);
  }

  getFavoriteNews(): Observable<News[]> {
    return of(this.savedNews);
  }
}
