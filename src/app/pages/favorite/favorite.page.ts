import { Component, OnInit, signal } from '@angular/core';
import {
  IonToolbar,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonTitle,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
  standalone: true,
  imports: [
    IonToolbar,
    IonHeader,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonTitle,
    RouterLink,
  ],
})
export class FavoritePage implements OnInit {
  greeting: string = '';
  readonly list = signal<News[]>([]);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchFavoriteNews();
  }

  // Fetch news data from the data service
  fetchFavoriteNews(): void {
    this.dataService.getFavoriteNews().subscribe((res) => {
      this.list.set(res);
    });
  }
}
