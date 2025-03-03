import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonChip,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocalStorageEnum } from 'src/app/types/enums/local-storage.enum';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: true,
  imports: [IonChip, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon],
})
export class NewsDetailPage implements OnInit {
  isSaved: boolean = false;
  news = signal<News | null>(null);

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10); // Ensure id is a number
      if (!isNaN(id)) {
        this.dataService.getOne(id).subscribe({
          next: (res) => {
            this.news.set(res || null); // Ensure signal updates even if no data
            // Check if this news ID is saved
            const savedIds: string[] =
              this.localStorageService.getArray(LocalStorageEnum.NewsId) || [];
            this.isSaved = savedIds.includes(id.toString());
          },
          error: (err) => console.error('Error fetching news:', err),
        });
      }
    });
  }

  onSave(id: number) {
    this.dataService.saveNews(id).subscribe((saved: boolean) => {
      this.isSaved = saved;
    });
  }

  onBack() {
    window.history.back();
  }
}
