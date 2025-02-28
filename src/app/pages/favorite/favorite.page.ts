import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { NewsCardComponent } from '../shares/news-card/news-card.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    NewsCardComponent,
  ],
})
export class FavoritePage implements OnInit {
  greeting: string = '';
  readonly list = signal<News[]>([]);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchFavoriteNews();
  }

  ionViewWillEnter(): void {
    this.fetchFavoriteNews();
  }

  fetchFavoriteNews(): void {
    this.dataService.getFavoriteNews().subscribe((res) => {
      this.list.set(res);
    });
  }
}
