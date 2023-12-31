import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { InfoCustomerPageComponent } from './info-customer-page/info-customer-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogParticularComponent } from './blog-particular/blog-particular.component';
import { LichNewComponent } from './lich-new/lich-new.component';
import { LichPage3Component } from './lich-page3/lich-page3.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'service-page', component: ServicesPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'info-customer-page', component: InfoCustomerPageComponent },
  { path: 'blog-page', component: BlogPageComponent },
  { path: 'blog-particular', component: BlogParticularComponent },
  { path: 'lich-new', component: LichNewComponent },
  { path: 'lich-page-3', component: LichPage3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
