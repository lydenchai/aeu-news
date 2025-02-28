import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/types/news';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    RouterLink,
  ],
})
export class NewsCardComponent implements OnInit {
  @Input() data!: News;

  constructor() {}

  ngOnInit() {}
}
