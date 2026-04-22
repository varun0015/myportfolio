import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioContainerComponent } from './containers/portfolio-container/portfolio-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PortfolioContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    PortfolioContainerComponent
  ]
})
export class PortfolioWebsiteModule { }
