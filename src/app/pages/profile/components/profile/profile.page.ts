import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonModal,
  IonButtons,
  IonButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocalStorageEnum } from 'src/app/types/enums/local-storage.enum';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonToolbar,
    IonCard,
    IonModal,
    IonButtons,
    IonButton,
    IonTitle,
  ],
})
export class ProfilePage implements OnInit {
  menuSections: any[] = [
    {
      menus: [
        {
          icon: 'cog-outline',
          label: 'My Profile',
          class: 'profile',
          route: 'my-profile',
        },
      ],
    },
    {
      menus: [
        {
          icon: 'notifications',
          label: 'Notifications',
          class: 'notification',
          route: 'notifications',
        },
        {
          icon: 'globe',
          label: 'Language',
          class: 'language',
          route: 'language',
        },
        {
          icon: 'contrast-outline',
          label: 'Appearance',
          class: 'appearance',
          route: 'appearance',
        },
      ],
    },
    {
      menus: [
        {
          icon: 'call-outline',
          label: 'Contact Us',
          class: 'contact',
          route: 'contact',
        },
        {
          icon: 'log-out-outline',
          label: 'Sign out',
          class: 'signout',
          route: 'login',
        },
      ],
    },
  ];

  name?: string;
  id?: string;
  isModalOpen: boolean = false;
  currentModalTitle: string = '';
  image: string | null = null;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  openModal(title: string) {
    this.currentModalTitle = title;
    this.isModalOpen = true;
  }

  cancel() {
    this.isModalOpen = false;
  }

  confirm() {
    this.isModalOpen = false;
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {}

  navigateTo(route?: string) {
    this.router.navigate([`../${route}`]);
  }

  ionViewWillEnter(): void {
    const storedImage = this.localStorageService.get(
      LocalStorageEnum.UserProfile
    );
    if (storedImage) {
      this.image = storedImage;
    }
    this.name = this.localStorageService.get(LocalStorageEnum.Username);
    this.id = this.localStorageService.get(LocalStorageEnum.UserId);
  }
}
