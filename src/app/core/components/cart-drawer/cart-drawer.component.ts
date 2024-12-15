import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDrawerService } from '../../services/cart-drawer.service';
import { Observable } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherMoreHorizontal, featherX, featherShoppingCart } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  imports: [CommonModule, NgIconComponent],
  providers: [CartDrawerService, provideIcons({ featherMoreHorizontal, featherX, featherShoppingCart })],
  standalone: true,
})
export class CartDrawerComponent {
  isShown$: Observable<boolean>;

  constructor(private cartDrawerService: CartDrawerService) {
    this.isShown$ = this.cartDrawerService.showCartDrawer$;
  }
}
