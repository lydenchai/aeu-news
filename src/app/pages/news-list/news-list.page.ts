import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonList,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonCard,
  IonChip,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  InfiniteScrollCustomEvent,
} from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { News } from 'src/app/types/news';
import { NewsCardComponent } from '../shares/news-card/news-card.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScroll,
    IonChip,
    IonCard,
    IonToolbar,
    IonHeader,
    IonContent,
    IonList,
    IonIcon,
    RouterLink,
    NewsCardComponent,
    IonInfiniteScrollContent,
  ],
})
export class NewsListPage implements OnInit, OnDestroy {
  @ViewChild('slideShow', { static: true }) slideShow!: ElementRef<HTMLElement>;
  currentIndex = 0;
  interval: any;
  greeting: string = '';
  searchTerm = signal<string>('');
  isSearchVisible: boolean = false;
  readonly list = signal<News[]>([]);
  readonly filteredList = signal<News[]>([]);
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.setGreeting();
    this.fetchNews();
  }

  private setGreeting(): void {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Good Afternoon!';
    } else {
      this.greeting = 'Good Evening!';
    }
  }

  private async fetchNews() {
    try {
      const data = await this.dataService.getList().toPromise();
      if (data && Array.isArray(data)) {
        this.list.set(data);
        this.filteredList.set(data); // Initialize filtered list
        if (data.length > 1) {
          this.startAutoScroll();
        }
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.fetchNews();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    this.searchTerm.set('');
    this.filteredList.set(this.list());
  }

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.set(inputElement.value);
    this.filterList();
  }

  filterList(): void {
    const search = this.searchTerm().toLowerCase().trim(); // Trim spaces
    if (!search) {
      this.filteredList.set(this.list()); // Show full list when search is empty
      return;
    }
    this.filteredList.set(
      this.list().filter((item) => item.title.toLowerCase().includes(search))
    );
  }

  clearSearch() {
    this.searchTerm.set('');
    this.filteredList.set(this.list()); // Reset to full list
  }

  private startAutoScroll() {
    this.stopAutoScroll(); // Ensure no duplicate intervals
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoScroll() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private nextSlide() {
    if (this.list().length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.list().length;
      this.scrollToSlide(this.currentIndex);
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.list().length) {
      this.currentIndex = index;
      this.scrollToSlide(index);
    }
  }

  private scrollToSlide(index: number) {
    const slideWidth = this.slideShow.nativeElement.clientWidth;
    this.slideShow.nativeElement.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }
}
