import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebisteRoutingModule } from './portfolio-webiste-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CookiesBarComponent } from '../cookies-bar/cookies-bar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CookiesBarComponent,
  ],
  imports: [
    CommonModule,
    PortfolioWebisteRoutingModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class PortfolioWebisteModule { }
