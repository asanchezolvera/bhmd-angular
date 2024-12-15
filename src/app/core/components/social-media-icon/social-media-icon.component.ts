import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  imports: [NgIconComponent],
})
export class SocialMediaIconComponent {
  @Input() icon = '';
}
