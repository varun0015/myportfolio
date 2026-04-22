import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() activeSection: string = 'hero';
  @Output() sectionClick = new EventEmitter<string>();
  @Output() ctaClick = new EventEmitter<void>();

  sections = ['hero', 'about', 'skills', 'projects', 'tech-stack', 'experience', 'testimonials', 'blog', 'contact'];

  onNavClick(section: string): void {
    this.sectionClick.emit(section);
  }

  onCTAClick(): void {
    this.ctaClick.emit();
  }

  onLogoClick(): void {
    this.sectionClick.emit('hero');
  }
}
