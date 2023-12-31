import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { InfoCustomerPageComponent } from './info-customer-page/info-customer-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'service-page', component: ServicesPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'info-customer-page', component: InfoCustomerPageComponent },
  { path: 'product-page', component: ProductPageComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
