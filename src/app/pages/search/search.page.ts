import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonTitle,
  IonList,
  IonItem,
  IonButton,
  IonChip,
  IonLabel,
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
    IonLabel,
    IonChip,
    IonButton,
    IonButtons,
    IonTitle,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonList,
    IonItem,
    RouterLink,
  ],
})
export class SearchPage implements OnInit {
  selectedTab = signal<string>('news');
  searchTerm = signal<string>('');
  readonly list = signal<News[]>([]);
  readonly filteredList = signal<News[]>([]);

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  setTab(tab: string) {
    this.selectedTab.set(tab);
    this.filterList();
  }

  fetchNews(): void {
    this.dataService.getList().subscribe((res) => {
      this.list.set(res);
      this.filterList();
    });
  }

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.set(inputElement.value);
    this.filterList();
  }

  filterList(): void {
    const search = this.searchTerm().toLowerCase();
    const tab = this.selectedTab();

    this.filteredList.set(
      this.list()
        .filter((item) => item.category === tab) // Ensure case match
        .filter((item) => item.title.toLowerCase().includes(search)) // Search filter
    );
  }

  onBack() {
    this.router.navigate(['/all-news']);
  }
}
