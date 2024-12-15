import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CartDrawerService } from '../../services/cart-drawer.service';
import { featherMenu, featherChevronDown, featherSearch, featherShoppingBag } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, RouterLinkActive, NgIconComponent],
  providers: [CartDrawerService, provideIcons({ featherMenu, featherChevronDown, featherSearch, featherShoppingBag })],
  standalone: true,
})
export class HeaderComponent {
  constructor(private cartDrawerService: CartDrawerService) {}

  showCartDrawer() {
    this.cartDrawerService.showCartDrawer();
  }
}
