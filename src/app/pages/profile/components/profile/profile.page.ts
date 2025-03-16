import { single } from 'rxjs';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
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
import { NotificationComponent } from 'src/app/shares/notification/notification.component';
import { LanguageComponent } from 'src/app/shares/language/language.component';

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
    NotificationComponent,
    LanguageComponent,
  ],
})
export class ProfilePage implements OnInit {
  menuSections = signal<any[]>([
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
  ]);

  name = signal<string>('');
  id = signal<string>('');
  isModalOpen = signal<boolean>(false);
  currentModalTitle = signal<string>('');
  image = signal<string | null>(null);

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  openModal(title: string) {
    this.currentModalTitle.set(title);
    this.isModalOpen.set(true);
  }

  cancel() {
    this.isModalOpen.set(false);
  }

  confirm() {
    this.isModalOpen.set(false);
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
      this.image.set(storedImage);
    }
    this.name.set(this.localStorageService.get(LocalStorageEnum.Username));
    this.id.set(this.localStorageService.get(LocalStorageEnum.UserId));
  }
}
