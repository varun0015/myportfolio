import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'my-portfolio',
  loadChildren: () => import('../app/portfolio-webiste/portfolio-webiste.module').then(m => m.PortfolioWebisteModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
