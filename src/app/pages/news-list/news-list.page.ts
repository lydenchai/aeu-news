import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonCard, IonRow, IonCol, IonCardHeader, IonBadge, IonCardTitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonToolbar,
    FormsModule,
    IonItem,
    IonLabel,
    IonList,
    RouterLink,
    IonHeader,
    IonTitle,
    IonCard,
    IonRow,
    IonCol,
    IonCardHeader,
    IonBadge,
    IonCardTitle,
    IonCardContent,
    IonText,
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

  // Fetch news data from the data service
  fetchNews(): void {
    this.dataService.getList().subscribe((res) => {
      this.list.set(res);
    });
  }

  onSearch() {
    this.router.navigate(['all-news/search']);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
