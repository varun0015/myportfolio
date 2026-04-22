import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService, PersonalInfo } from './services/portfolio.service';
import { PortfolioContainerComponent } from './portfolio-website/containers/portfolio-container/portfolio-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild(PortfolioContainerComponent) portfolioContainer!: PortfolioContainerComponent;

  personalInfo!: PersonalInfo;
  activeSection: string = 'hero';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  onSectionClick(sectionId: string): void {
    this.activeSection = sectionId;
    if (this.portfolioContainer) {
      this.portfolioContainer.scrollToSection(sectionId);
    }
  }

  onCTAClick(): void {
    this.activeSection = 'contact';
    if (this.portfolioContainer) {
      this.portfolioContainer.scrollToSection('contact');
    }
  }
}