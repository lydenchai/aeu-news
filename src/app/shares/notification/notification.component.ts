import { Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonList,
  IonToggle,
  IonCard,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  imports: [IonItem, IonList, IonToggle, IonCard, IonLabel],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
