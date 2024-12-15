import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDrawerService {
  private isCartDrawerOpenSubject = new BehaviorSubject<boolean>(false);

  isCartDrawerOpen$ = this.isCartDrawerOpenSubject.asObservable();

  showCartDrawer() {
    this.isCartDrawerOpenSubject.next(true);
  }
}
