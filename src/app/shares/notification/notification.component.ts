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
  sections: any[] = [
    {
      title: 'IN-APP NOTIFICATIONS',
      settings: [
        {
          title: 'In-App Sounds',
          checked: true,
        },
        {
          title: 'In-App Vibrate',
          checked: false,
        },
        {
          title: 'In-App Preview',
          checked: true,
        },
      ],
    },
    {
      title: 'BADGE COUNTER',
      settings: [
        {
          title: 'Count Unread News',
          checked: false,
        },
      ],
    },
    {
      title: 'Undo all custom notification setting',
      settings: [
        {
          title: 'Reset All Notifications',
          checked: null,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
