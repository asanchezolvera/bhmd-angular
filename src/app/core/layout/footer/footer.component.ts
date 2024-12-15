import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { SocialMediaIconComponent } from '../../components/social-media-icon/social-media-icon.component';
import {
  simpleFacebook,
  simpleInstagram,
  simpleX,
  simpleYoutube,
  simpleTiktok,
  simplePinterest,
} from '@ng-icons/simple-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [RouterLink, RouterLinkActive, CommonModule, SocialMediaIconComponent],
  providers: [provideIcons({ simpleFacebook, simpleInstagram, simpleX, simpleYoutube, simpleTiktok, simplePinterest })],
  standalone: true,
})
export class FooterComponent {
  socialMediaIcons = [
    'simpleFacebook',
    'simpleInstagram',
    'simpleX',
    'simpleYoutube',
    'simpleTiktok',
    'simplePinterest',
  ];
}
