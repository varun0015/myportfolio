import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() name: string = '';
  @Input() github: string = '';
  @Input() linkedin: string = '';
  @Input() email: string = '';
}
