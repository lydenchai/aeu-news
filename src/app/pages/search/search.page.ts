import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonTitle,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonSegment,
    IonLabel,
    IonSegmentButton,
    IonTitle,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    FormsModule,
    IonList,
    IonItem,
    RouterLink,
  ],
})
export class SearchPage implements OnInit {
  selectedTab = signal<string>('news'); // Default to 'news'
  searchTerm = signal<string>('');
  readonly list = signal<News[]>([]);
  readonly filteredList = signal<News[]>([]);

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.dataService.getList().subscribe((res) => {
      this.list.set(res);
      this.filterList();
    });
  }

  filterList(): void {
    const search = this.searchTerm().toLowerCase();
    const tab = this.selectedTab();

    this.filteredList.set(
      this.list()
        .filter((item) => item.category === tab) // Filter by selected tab (news/events)
        .filter((item) => item.title.toLowerCase().includes(search)) // Search filter
    );
  }

  onBack() {
    this.router.navigate(['/all-news']);
  }
}
