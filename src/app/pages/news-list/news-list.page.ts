import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
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
export class NewsListPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('slideShow', { static: false })
  slideShow!: ElementRef<HTMLElement>;

  currentIndex = 0;
  interval: any;
  greeting: string = '';
  searchTerm = signal<string>('');
  isSearchVisible = false;
  readonly list = signal<News[]>([]);
  readonly filteredList = signal<News[]>([]);

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.setGreeting();
    this.fetchNews();
  }

  ngAfterViewInit(): void {
    // Ensure slideshow is available before starting auto-scroll
    setTimeout(() => {
      if (this.slideShow && this.list().length > 1) {
        this.startAutoScroll();
      }
    }, 500);
  }

  private setGreeting(): void {
    const hour = new Date().getHours();
    this.greeting =
      hour >= 5 && hour < 12
        ? 'Good Morning!'
        : hour >= 12 && hour < 18
        ? 'Good Afternoon!'
        : 'Good Evening!';
  }

  private async fetchNews() {
    try {
      const data = await this.dataService.getList().toPromise();
      if (data && Array.isArray(data)) {
        this.list.set(data);
        this.filteredList.set(data);

        // Start auto-scroll only when data is available
        setTimeout(() => {
          if (this.slideShow && this.list().length > 1) {
            this.startAutoScroll();
          }
        }, 500);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.fetchNews();
    setTimeout(() => event.target.complete(), 500);
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    this.searchTerm.set('');
    this.filteredList.set(this.list());
  }

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.set(inputElement.value.trim().toLowerCase());
    this.filterList();
  }

  filterList(): void {
    const search = this.searchTerm();
    this.filteredList.set(
      search
        ? this.list().filter((item) =>
            item.title.toLowerCase().includes(search)
          )
        : this.list()
    );
  }

  clearSearch() {
    this.searchTerm.set('');
    this.filteredList.set(this.list());
  }

  private startAutoScroll() {
    this.stopAutoScroll();
    this.interval = setInterval(() => this.nextSlide(), 5000);
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
    if (!this.isSearchVisible && this.slideShow?.nativeElement) {
      const slideWidth = this.slideShow.nativeElement.clientWidth;
      this.slideShow.nativeElement.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }
}
