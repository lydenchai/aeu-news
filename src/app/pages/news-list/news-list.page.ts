import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
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
  private intervalId: any;
  greeting: string = '';
  searchTerm = signal<string>('');
  isSearchVisible = false;
  readonly list = signal<News[]>([]);
  readonly filteredList = signal<News[]>([]);

  constructor(private dataService: DataService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setGreeting();
    this.fetchNews();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initializeAutoScroll(), 500);
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

  async fetchNews() {
    try {
      const data = await this.dataService.getList().toPromise();
      if (Array.isArray(data)) {
        this.list.set(data);
        this.filteredList.set(data);
        this.initializeAutoScroll();
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  private initializeAutoScroll() {
    if (this.slideShow && this.list().length > 1) {
      this.startAutoScroll();
      this.trackScroll();
    }
  }

  filterList(): void {
    const search = this.searchTerm().trim().toLowerCase();
    this.filteredList.set(
      search
        ? this.list().filter((item) =>
            item.title.toLowerCase().includes(search)
          )
        : this.list()
    );
  }

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
    this.clearSearch();
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.filteredList.set(this.list());
  }

  onSearchInput(event: Event): void {
    this.searchTerm.set(
      (event.target as HTMLInputElement).value.trim().toLowerCase()
    );
    this.filterList();
  }

  onIonInfinite(event: InfiniteScrollCustomEvent): void {
    this.fetchNews();
    setTimeout(() => event.target.complete(), 500);
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoScroll(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private nextSlide(): void {
    if (this.list().length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.list().length;
      this.scrollToSlide(this.currentIndex);
    }
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.list().length) {
      this.currentIndex = index;
      this.scrollToSlide(index);
    }
  }

  private scrollToSlide(index: number): void {
    if (!this.isSearchVisible && this.slideShow?.nativeElement) {
      const slideWidth = this.slideShow.nativeElement.clientWidth;
      this.slideShow.nativeElement.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
    }
  }

  private trackScroll(): void {
    if (!this.slideShow?.nativeElement) return;

    this.renderer.listen(this.slideShow.nativeElement, 'scroll', () => {
      requestAnimationFrame(() => {
        const slideShowEl = this.slideShow.nativeElement;
        const slides = slideShowEl.children;
        let minDiff = Infinity;
        let activeIndex = 0;
        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i] as HTMLElement;
          const diff = Math.abs(
            slide.getBoundingClientRect().left -
              slideShowEl.getBoundingClientRect().left
          );
          if (diff < minDiff) {
            minDiff = diff;
            activeIndex = i;
          }
        }
        this.currentIndex = activeIndex;
      });
    });
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }
}
