import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonToolbar,
    IonHeader,
    IonContent,
    IonToolbar, 
    IonItem,
    IonLabel,
    IonList,
    RouterLink,
    IonHeader,
    IonTitle,
    IonCard, 
    IonCardHeader, 
    IonCardTitle,
    IonCardContent, 
  ],
})
export class NewsListPage implements OnInit {
  greeting: string = '';
  readonly list = signal<News[]>([]);
  activeTab: string = 'news'; // Default active tab

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.setGreeting();
    this.fetchNews();
  }

  // Set greeting based on time
  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Good Afternoon!';
    } else {
      this.greeting = 'Good Evening!';
    }
  }

  async fetchNews() {
    try {
      const data = await this.dataService.getList().toPromise();
      if (data) {
        this.list.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  onSearch() {
    this.router.navigate(['all-news/search']);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
