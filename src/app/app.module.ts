import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavigatorComponent } from './widgets/header-navigator/header-navigator.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { InfoCustomerPageComponent } from './info-customer-page/info-customer-page.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroducePageComponent } from './introduce-page/introduce-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

registerLocaleData(localeVi, 'vi-VN');

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderNavigatorComponent,
    FooterComponent,
    InfoCustomerPageComponent,
    CartPageComponent,
    ServicesPageComponent,
    ProductPageComponent,
    NotFoundComponent,
    ProductPageComponent,
    IntroducePageComponent,
    DetailPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
