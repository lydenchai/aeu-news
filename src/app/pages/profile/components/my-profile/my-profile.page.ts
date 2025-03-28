import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonInput,
  IonLabel,
} from '@ionic/angular/standalone';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocalStorageEnum } from 'src/app/types/enums/local-storage.enum';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonAvatar,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    IonInput,
    ReactiveFormsModule,
  ],
})
export class MyProfilePage implements OnInit {
  isEditing = signal<boolean>(false);
  name = signal<string>('');
  id = signal<string>('');
  image = signal<string | null>(null);

  profileForm = new FormGroup({
    name: new FormControl<string | null>(''),
    id: new FormControl<string | null>(''),
    major: new FormControl<string | null>('Computer Science'),
    class: new FormControl<string | null>('Evening'),
  });

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    const storedImage = localStorageService.get(LocalStorageEnum.UserProfile);
    if (storedImage) {
      this.image.set(storedImage);
    }
  }

  ngOnInit(): void {
    this.name.set(
      this.localStorageService.get(LocalStorageEnum.Username) || 'Ionic Dev'
    );
    this.id.set(
      this.localStorageService.get(LocalStorageEnum.UserId) || '00009'
    );
    this.profileForm.controls.name.patchValue(this.name());
    this.profileForm.controls.id.patchValue(this.id());
  }

  uploadImage() {
    const fileInput: HTMLInputElement | null =
      document.querySelector('input[type="file"]');
    fileInput?.click(); // Trigger file input click programmatically
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert the image to base64 and store it in localStorage
        const base64Image = reader.result as string;
        this.localStorageService.set(LocalStorageEnum.UserProfile, base64Image);

        // Update the image display in the UI
        this.image.set(base64Image);
      };
      // Convert the image to base64
      reader.readAsDataURL(file);
    }
  }

  toggleEdit() {
    if (this.isEditing()) {
      const userInfo: any = this.profileForm.value;
      this.name.set(userInfo.name);
      this.id.set(userInfo.id);
      this.localStorageService.set(LocalStorageEnum.Username, userInfo.name);
      this.localStorageService.set(LocalStorageEnum.UserId, userInfo.id);
    }
    this.isEditing.set(!this.isEditing());
  }

  onBack() {
    this.router.navigate(['/profile']);
  }
}
