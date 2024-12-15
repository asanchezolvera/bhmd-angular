import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { CartDrawerComponent } from './core/components/cart-drawer/cart-drawer.component';
import { CartDrawerService } from './core/services/cart-drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CartDrawerComponent],
  providers: [CartDrawerService],
})
export class AppComponent {
  title = 'bhmd-angular';
}
