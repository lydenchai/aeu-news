import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { NewsCardComponent } from '../../shares/news-card/news-card.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocalStorageEnum } from 'src/app/types/enums/local-storage.enum';
import { InfiniteScrollCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonList,
    IonContent,
    IonHeader,
    IonToolbar,
    NewsCardComponent,
  ],
})
export class SavePage implements OnInit {
  readonly list = signal<News[]>([]);

  constructor(
    private dataService: DataService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.fetchFavoriteNews();
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.fetchFavoriteNews();
    setTimeout(() => event.target.complete(), 500);
  }

  ionViewWillEnter(): void {
    this.fetchFavoriteNews();
  }

  fetchFavoriteNews(): void {
    this.dataService.getFavoriteNews().subscribe((res) => {
      this.list.set(res);
    });
  }

  clearAllSavedNews(): void {
    this.localStorageService.delete(LocalStorageEnum.NewsId); // Remove the stored list
    this.fetchFavoriteNews();
  }
}
