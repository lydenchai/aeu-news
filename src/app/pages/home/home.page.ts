import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent,
    FormsModule,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  greeting: string = '';
  readonly list = signal<News[]>([]);

  constructor(private dataService: DataService) {}

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
}
