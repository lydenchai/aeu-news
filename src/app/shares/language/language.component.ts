import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  imports: [IonIcon, IonItem, IonLabel, IonList, IonCard],
})
export class LanguageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
