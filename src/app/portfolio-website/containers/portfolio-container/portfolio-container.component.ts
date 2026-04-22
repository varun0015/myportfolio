import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService, PersonalInfo } from '../../../services/portfolio.service';
import { ContactService, ContactFormData } from '../../../services/contact.service';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioContainerComponent implements OnInit {
  personalInfo!: PersonalInfo;
  skillCategories: any = {};
  projects: any[] = [];
  experience: any[] = [];
  testimonials: any[] = [];
  blogArticles: any[] = [];
  education: any = {};

  // Form properties
  subjectOptions: string[] = [];
  formData = {
    name: '',
    email: '',
    subject: '',
    customSubject: '',
    message: ''
  };
  showCustomSubject = false;
  formSubmitStatus: 'idle' | 'success' | 'error' = 'idle';

  // Theme and scroll tracking
  isDarkMode = false;
  activeSection: string = 'hero';
  sectionIds: string[] = [
    'hero', 'about', 'skills', 'projects', 'tech-stack',
    'experience', 'testimonials', 'blog', 'contact'
  ];

  constructor(
    private portfolioService: PortfolioService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.loadPortfolioData();
    this.initializeTheme();
    this.subjectOptions = this.contactService.getSubjectOptions();
  }

  private loadPortfolioData(): void {
    this.personalInfo = this.portfolioService.getPersonalInfo();
    this.skillCategories = this.portfolioService.getSkills();
    this.projects = this.portfolioService.getProjects();
    this.experience = this.portfolioService.getExperience();
    this.testimonials = this.portfolioService.getTestimonials();
    this.blogArticles = this.portfolioService.getBlogArticles();
    this.education = this.portfolioService.getEducation();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let currentActive = 'hero';
    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= -200 && rect.top <= window.innerHeight / 2) {
          currentActive = sectionId;
          break;
        }
      }
    }
    this.activeSection = currentActive;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubjectChange(selectedSubject: string): void {
    this.formData.subject = selectedSubject;
    this.showCustomSubject = selectedSubject === 'Other';
    if (selectedSubject !== 'Other') {
      this.formData.customSubject = '';
    }
  }

  onContactSubmit(form: any): void {
    if (!form.valid) {
      return;
    }

    const contactData: ContactFormData = {
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      customSubject: this.formData.customSubject,
      message: this.formData.message
    };

    this.contactService.submitContactForm(contactData).subscribe(
      (response) => {
        this.formSubmitStatus = 'success';
        setTimeout(() => {
          this.formSubmitStatus = 'idle';
        }, 5000);
        this.resetForm(form);
      },
      (error) => {
        this.formSubmitStatus = 'error';
        console.error('Form submission error:', error);
        setTimeout(() => {
          this.formSubmitStatus = 'idle';
        }, 5000);
      }
    );
  }

  resetForm(form: any): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      customSubject: '',
      message: ''
    };
    this.showCustomSubject = false;
    if (form) {
      form.resetForm();
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  getPhoneDigits(): string {
    return this.personalInfo.phone.replace(/[^0-9]/g, '');
  }

  getSkillCategories(): string[] {
    return Object.keys(this.skillCategories);
  }
}
