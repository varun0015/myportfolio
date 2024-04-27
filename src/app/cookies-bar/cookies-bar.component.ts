import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-bar',
  templateUrl: './cookies-bar.component.html',
  styleUrls: ['./cookies-bar.component.scss']
})
export class CookiesBarComponent implements OnInit {
  showBar: boolean = true;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const cookiesAccepted = this.cookieService.get('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      this.showBar = false; 
    }
  }

  acceptAllCookies(): void {
    this.cookieService.set('cookiesAccepted', 'true');
    this.showBar = false;
  }

  declineAllCookies(): void {
    this.cookieService.deleteAll();
    this.showBar = false; 
  }
}
