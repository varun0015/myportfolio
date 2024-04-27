import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  links = [
    'Skills',
    'About',
    // 'Work experience',
    'Contact'
  ]

  constructor(private router: Router) {

  }


  ngOnInit(): void {

  }

  navigate(link: string): void {
    switch (link) {
      // case 'Home':
      //   window.scrollTo({top:0,behavior: 'smooth'});
      //   break;
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
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  navigateToHome(){
    this.router.navigate(['/my-portfolio/home']);
  }
}
