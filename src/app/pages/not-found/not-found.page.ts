import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [IonContent, FormsModule],
})
export class NotFoundPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onBack() {
    this.router.navigate(['/login']);
  }
}
