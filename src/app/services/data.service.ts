import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseCrudService } from './base-crud.service';
import { News } from '../types/news';
import { LocalStorageEnum } from '../types/enums/local-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseCrudService<News> {
  private fakeData: News[] = [
    {
      id: 1,
      title:
        'ប្រធានគណៈមេធាវីកម្ពុជា៖ តួនាទីរបស់មេធាវីកាន់តែមានសារៈសំខាន់ ពេលដែលសង្គមត្រូវបានធ្វើទំនើបកម្ម និងមានការវិវត្តន៍ឥតឈប់ឈរ',
      category: 'news',
      content:
        '(ភ្នំពេញ)៖ លោកមេធាវី សាំង វណ្ណៈ ប្រធានគណៈមេធាវីនៃកម្ពុជា បានថ្លែងបញ្ជាក់ថា តួនាទីរបស់មេធាវី ដែលរួមមានការតំណាង ការការពារក្ដី ការប្រឹក្សាយោបល់ និងតាក់តែងលិខិតស្នាមគតិយុត្ត ក៏ដូចជា​ការធ្វើជា​​អាជ្ញាកណ្ដាល អ្នកផ្សះផ្សា ឬអ្នកសម្រុះសម្រួលជាអាទិ៍ កាន់តែមានសារៈសំខាន់ ខណៈពេលដែលសង្គមត្រូវបានធ្វើទំនើបកម្ម និងមានការវិវត្តន៍ឥតឈប់ឈរ ជាពិសេសនៅក្នុងបរិបទនៃសង្គមនីតិរដ្ឋ ដែលច្បាប់ និងលិខិតបទដ្ឋាន​​គតិយុត្តមានកាន់តែច្រើនឡើងៗពីមួយថ្ងៃទៅមួយថ្ងៃ ពីមួយឆ្នាំទៅមួយឆ្នាំ។',
      date: '22 មករា 2025',
      save: true,
      thumbnail:
        'https://www.aeu.edu.kh/news/photo_2025-01-22_16-03-27.jpg_1737776233.jpg',
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-22_16-03-25%20(2)_1737776006.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-22_16-03-25_1737776026.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-22_16-03-27%20(2)_1737776048.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-22_16-03-28_1737776069.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-22_16-03-26_1737776093.jpg',
      ],
    },
    {
      id: 2,
      title:
        'ប្រកាសដាក់ឱ្យដំណើរការកម្មវិធីសិក្សាមុខជំនាញប្រតិបត្តិផ្នែកគ្រប់គ្រងពាណិជ្ជកម្ម (EMBA) របស់សាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប',
      category: 'event',
      content:
        '(ភ្នំពេញ)៖ អ្នកឧកញ៉ា លី ឃុនថៃ ប្រធានក្រុមប្រឹក្សាភិបាល និងលោកជំទាវបណ្ឌិត ខា ឡេង ប្រធានកិត្តិយសក្រុមប្រឹក្សាភិបាលនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប នាថ្ងៃទី១៧ ខែមករា ឆ្នាំ២០២៥នេះ បានអញ្ជើញជាអធិបតីប្រកាសដាក់ឱ្យដំណើរការកម្មវិធីសិក្សាមុខជំនាញប្រតិបត្តិផ្នែកគ្រប់គ្រងពាណិជ្ជកម្ម (EMBA)ដែលជាមុខជំនាញដំបូងគេបង្អស់នៅប្រទេសកម្ពុជា និងបានទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡា នៅក្នុងសាកលវិទ្យាល័យ។',
      date: '17 មករា 2025',
      save: false,
      thumbnail:
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
      images: [
        'https://www.aeu.edu.kh/pages/8Y9A9986_1737177198.JPG',
        'https://www.aeu.edu.kh/pages/8Y9A0027_1737177244.JPG',
        'https://www.aeu.edu.kh/pages/8Y9A0048_1737177265.JPG',
      ],
    },
    {
      id: 3,
      title:
        'កិច្ចទទួលជួបពិភាក្សាការងាររវាងសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ជាមួយ លោកបណ្ឌិត Megat Mohd Samsul Megat Ismail',
      category: 'news',
      content:
        ' រសៀលថ្ងៃព្រហស្បតិ៍ ៣រោច ខែបុស្ស ឆ្នាំរោង ឆស័ក ព.ស.២៥៦៨ ត្រូវនឹងថ្ងៃទី១៦ ខែមករា ឆ្នាំ២០២៥ នេះ លោក ស៊ុន សេដ្ឋា សាកលវិទ្យាធិការនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប និងជាតំណាងដ៏ខ្ពង់ខ្ពស់អ្នកឧកញ៉ា លី ឃុនថៃ ប្រធានក្រុមប្រឹក្សាភិបាលនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប រួមជាមួយគណៈគ្រប់គ្រង ទទួលជួបពិភាក្សាការងារជាមួយ  បណ្ឌិត Megat Mohd Samsul Megat Ismail អ្នកគ្រប់គ្រងជាន់ខ្ពស់ផ្នែកទំនាក់ទំនងទីផ្សារ ប្រចាំតំបន់អាស៊ីអាគ្នេយ៍ (អាស៊ាន) នៃស្ថាប័នអប់រំឧត្តមសិក្សាប្រទេសម៉ាឡេស៊ី នៅបន្ទប់ប្រជុំ អគារមាស ជាន់ទី១២ នៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប។',
      date: '16 មករា 2025',
      save: false,
      thumbnail:
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_18-34-50_1737175885.jpg',
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_18-34-48_1737175848.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_18-34-48%20(2)_1737175866.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_18-34-50_1737175885.jpg',
      ],
    },
    {
      id: 4,
      title:
        'កិច្ចទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង',
      category: 'news',
      content:
        'ព្រឹកថ្ងៃព្រហស្បតិ៍ ៣រោច ខែបុស្ស ឆ្នាំរោង ឆស័ក ព.ស.២៥៦៨ ត្រូវនឹងថ្ងៃទី១៦ ខែមករា ឆ្នាំ២០២៥ លោក ស៊ុន សេដ្ឋា សាកលវិទ្យាធិការ បានដឹកនាំគណៈគ្រប់គ្រងនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ទទួលស្វាគមន៍គណៈប្រតិភូអញ្ជើញមកពីអង្គការវិទ្យាស្ថានតស៊ូមតិ និងគោលនយោបាយ (API) និងអង្គការម្លប់បៃតង ដើម្បីជម្រាបជូនពី គម្រោង ការកសាងសាមគ្គីភាពអាស៊ានតែមួយ និងនិរន្តរភាពនៃភាពជាដៃគូរវាង យុវជន អង្គការសង្គមស៊ីវិល និងរដ្ឋសមាជិក(A-SASSY) និងណែនាំគោលបំណងកម្មវិធីអប់រំបរិស្ថាន(EEP) និងបង្ហាញពីគោលបំណងចង់បង្កើតកិច្ចសហប្រតិបត្តការរវាងគ្នានិងគ្នានាពេលអនាគត។',
      date: '16 មករា 2025',
      save: false,
      thumbnail:
        'https://www.aeu.edu.kh/news/photo_2025-01-16_14-27-56.jpg_1737168870.jpg',
      images: [
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-54_1737168427.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55_1737168570.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-55%20(2)_1737168748.jpg',
        'https://www.aeu.edu.kh/pages/photo_2025-01-16_14-27-56%20(2)_1737168771.jpg',
      ],
    },
    {
      id: 5,
      title:
        'នារសៀលថ្ងៃទី១៥ ខែមករា ឆ្នាំ២០២៥នេះ សាស្រ្តាចារ្យ បណ្ឌិត សួស សោភា តំណាងលោក ស៊ុន សេដ្ឋា សាកលវិទ្យាធិការ និងអ្នកឧកញ៉ា លី ឃុនថៃ ប្រធានក្រុមប្រឹក្សាភិបាលនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប បានទទួលស្វាគមន៍គណប្រតិភូអ្នកវិនិយោគទុនខេត្តហឺណាន',
      category: 'event',
      date: '15 មករា 2025',
      content:
        'នារសៀលថ្ងៃទី១៥ ខែមករា ឆ្នាំ២០២៥នេះ សាស្រ្តាចារ្យ បណ្ឌិត សួស សោភា តំណាងលោក ស៊ុន សេដ្ឋា សាកលវិទ្យាធិការ និងអ្នកឧកញ៉ា លី ឃុនថៃ ប្រធានក្រុមប្រឹក្សាភិបាលនៃសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប បានទទួលស្វាគមន៍គណប្រតិភូអ្នកវិនិយោគទុនខេត្តហឺណាន ដឹកនាំដោយ ៖ ១.លោក Tian Jianmin ប្រធានកិត្តិយស វិទ្យាស្ថានស្រាវជ្រាវ ២.លោក Chen Zhicheng នាយកធុរកិច្ចទទួលបន្ទុកខាងក្រៅប្រទេស ៣.លោក Chen Zusheng អគ្គនាយក នាយកដ្ឋានគ្រប់គ្រងវិនិយោគ ៤. លោក Gan Yu  សាស្រ្តាចារ្យ អញ្ជើញមកទស្សនកិច្ចនៅសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប និងពិភាក្សាការងារក្នុងគោលបំណងដូចជា ៖ ១. ឈ្វេងយល់ពីសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ២. ឱកាសសហការក្នុងវិស័យអប់រំកសិកម្ម ឆ្លៀតក្នុងឱកាសនៃជំនួបនេះ សាស្រ្តាចារ្យ បណ្ឌិត សួស សោភា បានស្នើសុំទៅភាគីចិនចំនួន ២ចំនុច៖ ១. បង្កើតឱ្យមានកិច្ចសហការបណ្តុះបណ្តាលលើវិស័យអប់រំកសិកម្មនៅសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ២. ជួយបន្តផ្សព្វផ្សាយ និងផ្សារភ្ជាប់ស្ថាប័នអប់រំឧត្តមសិក្សានៅខេត្ត ហឺ ណាន (He Nan Province) មកទស្សនកិច្ចនៅសាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប ៣. ជំរុញអ្នកវិនិយោគទុននៅខេត្តហឺណាន ប្រទេសចិន មកវិនិយោគទុន និងទស្សនកិច្ចនៅកម្ពុជាឱ្យបានច្រើន។',
      save: false,
      thumbnail: 'https://www.aeu.edu.kh/news/8Y9A9738.jpg_1736934837.jpg',
      images: [
        'https://aeu.edu.kh/pages/8Y9A9743_1736934555.jpg',
        'https://aeu.edu.kh/pages/8Y9A9752_1736934587.jpg',
        'https://aeu.edu.kh/pages/8Y9A9756_1736934606.jpg',
        'https://aeu.edu.kh/pages/8Y9A9763_1736934662.jpg',
      ],
    },
    {
      id: 6,
      title:
        'រដ្ឋមន្ដ្រី នេត្រ ភក្ដ្រា ចាត់ទុកគ្រឹះស្ថានឯកជន ដើរតួនាទីសំខាន់ក្នុងការជួយបណ្ដុះបណ្ដាលធនធានមនុស្ស',
      category: 'event',
      date: '21 ធ្នូ 2024',
      content:
        'នាល្ងាចថ្ងៃសៅរ៍ ទី២១ ខែធ្នូ ឆ្នាំ២០២៤ ឯកឧត្តម នេត្រ ភក្ត្រា រដ្ឋមន្ត្រីក្រសួងព័ត៌មាន បានអញ្ជើញជាអធិបតីភាពក្នុង "ពិធីជួបជុំអតីតនិស្សិតសាកលវិទ្យាល័យ​ អាស៊ី អឺរ៉ុប និងពិសាភោជនីហារ សាមគ្គី" នៅមជ្ឈមណ្ឌលសន្និបាត និងពិព័រណ៍កោះពេជ្រ។',
      save: false,
      thumbnail:
        'https://www.aeu.edu.kh/news/471152208_1111923113706122_6959926773480706055_n.jpg_1736480822.jpg',
      images: [
        'https://www.aeu.edu.kh/pages/471147568_1111924830372617_2297452604905564407_n_1736480554.jpg',
        'https://www.aeu.edu.kh/pages/471257401_1111925157039251_7759449759748589275_n_1736480588.jpg',
        'https://www.aeu.edu.kh/pages/471254346_1111925277039239_1034084042836640753_n_1736480611.jpg',
        'https://www.aeu.edu.kh/pages/471257883_1111923670372733_7223409306922431177_n_1736480630.jpg',
      ],
    },
  ];

  private savedNews: News[] = []; // Cached list of saved news items

  constructor(private localStorageService: LocalStorageService) {
    super();
    this.loadFavoriteNews(); // Load saved news on initialization
  }

  // Get all news items
  getList(): Observable<News[]> {
    return of(this.fakeData);
  }

  // Get a single news item by ID
  getOne(id: number): Observable<News | undefined> {
    const newsItem: News | undefined = this.fakeData.find(
      (item) => item.id === id
    );
    return of(newsItem);
  }

  // Toggle save status and update localStorage
  saveNews(id: number): Observable<boolean> {
    let savedIds: string[] =
      this.localStorageService.getArray(LocalStorageEnum.NewsId) || [];
    const newsItem = this.fakeData.find((item) => item.id === id);

    if (newsItem) {
      newsItem.save = !newsItem.save; // Toggle save status
      if (newsItem.save) {
        savedIds.push(id.toString()); // Convert number to string before storing
      } else {
        savedIds = savedIds.filter((storedId) => storedId !== id.toString()); // Remove saved ID
      }

      // Update local storage
      this.localStorageService.setArray(LocalStorageEnum.NewsId, savedIds);
      return of(newsItem.save);
    }

    return of(false);
  }

  // Load favorite news from localStorage
  private loadFavoriteNews(): void {
    const savedIds =
      this.localStorageService.getArray(LocalStorageEnum.NewsId) || [];

    this.savedNews = this.fakeData.filter((news) => savedIds.includes(news.id));
  }

  // Get favorite news from savedNews
  getFavoriteNews(): Observable<News[]> {
    let savedIds: string[] =
      this.localStorageService.getArray(LocalStorageEnum.NewsId) || [];

    // Convert stored ID strings to numbers
    const numericIds = savedIds.map((id) => Number(id));

    // Filter news by ID
    const favoriteNews = this.fakeData.filter((item) =>
      numericIds.includes(item.id)
    );
    return of(favoriteNews);
  }
}
