import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonIcon,
  ],
})
export class NewsDetailPage implements OnInit {
  news = signal<News | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  goBack() {
    this.router.navigate(['/home']);
  }
}
