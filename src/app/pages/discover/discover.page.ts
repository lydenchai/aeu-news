import { Component, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonList,
  IonChip, IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { NewsCardComponent } from '../shares/news-card/news-card.component';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonToolbar, IonChip, IonIcon, IonContent, IonList, NewsCardComponent],
})
export class DiscoverPage implements OnInit {
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

  clearSearch() {
    this.searchTerm.set('');
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
    this.router.navigate(['/home']);
  }
}
