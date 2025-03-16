import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading = signal<boolean>(false);
  private _isLoading$ = new BehaviorSubject(false);
  isLoading$: Observable<boolean> = this._isLoading$;
  counter = 0;

  constructor() {}

  setLoading(isLoading: boolean) {
    if (isLoading) {
      this.counter++;
    } else {
      this.counter = this.counter - 1 < 0 ? 0 : this.counter - 1;
    }
    this._isLoading.set(this.counter > 0);
    this._isLoading$.next(this._isLoading());
  }

  forceStop() {
    this.counter = 0;
    this._isLoading.set(false);
    this._isLoading$.next(this._isLoading());
  }
}
