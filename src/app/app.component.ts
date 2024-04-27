import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor (public cookieService: CookieService, ){

  } 
  ngOnInit(): void {
    // Set cookie
    this.cookieService.set('cookieName', 'cookieValue');

    // Get cookie
    const cookieValue = this.cookieService.get('cookieName');
    console.log('Cookie Value:', cookieValue);

    // Delete cookie
    this.cookieService.delete('cookieName');
  }
}
