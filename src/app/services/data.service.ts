import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { News } from '../types/news';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseCrudService<News> {
  // Fake data array
  private fakeData: News[] = [
    {
      id: 1,
      title:
        'កិច្ចទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង',
      category: 'News',
      description: 'Explore the top tourist attractions around the world.',
      content:
        'ព្រឹកថ្ងៃព្រហស្បតិ៍ ៣រោច ខែបុស្ស ឆ្នាំរោង ឆស័ក ព.ស.២៥៦៨ ត្រូវនឹងថ្ងៃទី១៦ ខែមករា ឆ្នាំ២០២៥ លោក ស៊ុន សេដ្ឋា សាកលវិទ្យាធិការ បានដឹកនាំគណៈគ្រប់គ្រងនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង ដើម្បីជម្រាបជូនពី គម្រោង ការកសាងសាមគ្គីភាពអាស៊ានតែមួយ និងនិរន្តរភាពនៃភាពជាដៃគូរវាង យុវជន អង្គការសង្គមស៊ីវិល និងរដ្ឋសមាជិក(A-SASSY) និងណែនាំគោលបំណងកម្មវិធីអប់រំបរិស្ថាន(EEP) និងបង្ហាញពីគោលបំណងចង់បង្កើតកិច្ចសហប្រតិបត្តការរវាងគ្នានិងគ្នានាពេលអនាគត។',
      date: 'October 5, 2023',
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
      category: 'News',
      description: 'Discover the finest dining experiences in Paris.',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: 'October 6, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
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
      title: 'Top 10 Hiking Trails in the World',
      category: 'Event',
      description: 'Find out the best hiking trails for your next adventure.',
      content: 'Euismod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'October 7, 2023',
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56_1737168404.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55_1737168570.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56%20(2)_1737168771.jpg',
      ],
    },
  ];

  // Get a list of news items
  getList(): Observable<News[]> {
    return of(this.fakeData);
  }

  // Get a news item by ID
  getOne(id: number): Observable<News | undefined> {
    const newsItem = this.fakeData.find((item) => item.id === id);
    return of(newsItem);
  }
}
