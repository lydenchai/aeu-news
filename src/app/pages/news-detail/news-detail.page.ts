import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon],
})
export class NewsDetailPage implements OnInit {
  isSaved: boolean = false;
  news = signal<News | null>(null);

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10); // Ensure id is a number

      // Fetch news data from the data service
      if (!isNaN(id)) {
        this.dataService.getOne(id).subscribe({
          next: (res) => {
            this.news.set(res || null); // Ensure signal updates even if no data
          },
          error: (err) => console.error('Error fetching news:', err),
        });
      }
    });
  }

  onSave(id: number) {
    this.dataService.saveNews(id).subscribe((saved) => {
      this.isSaved = !this.isSaved;
    });
  }

  onBack() {
    window.history.back();
  }
}
