import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    'Home',
    'Skills',
    'About',
    'Contact',
    'Youtube',
    'LinkedIn',
    'Email',
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  navigate(link: string): void {
    switch (link) {
      case 'Home':
        this.router.navigate(['/my-portfolio/home']);
        break;
      case 'Skills':
        const skillsSelection = document.getElementById('skills-section')
        if (skillsSelection) {
          skillsSelection.scrollIntoView();
        } else {
          this.router.navigate(['/my-portfolio/home']);
        }
        break;
      case 'About':
        this.router.navigate(['/my-portfolio/about-us']);
        break;
      case 'Contact':
        this.router.navigate(['/my-portfolio/contact-us']);
        break;
      case 'Youtube':
        window.location.href = "https://www.youtube.com/";
        break;
      case 'LinkedIn':
        window.location.href = "https://www.linkedin.com/in/varun-kumar-350854172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0PxwspR3ST2rLkg84U3uSA%3D%3D";
        break;
      case 'Email':
        window.location.href = "mailto:varun816@outlook.com";
        break;
      default:
        this.router.navigate(['/']);
        break;
    }

  }
}
