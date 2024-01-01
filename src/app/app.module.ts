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
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogParticularComponent } from './blog-particular/blog-particular.component';
import { LichNewComponent } from './lich-new/lich-new.component';
import { LichPage3Component } from './lich-page3/lich-page3.component';
import { InfoCustomerPageComponent } from './info-customer-page/info-customer-page.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { BlogAllComponent } from './blog-all/blog-all.component';

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
    CartPageComponent,
    BlogPageComponent,
    BlogParticularComponent,
    LichNewComponent,
    LichPage3Component,
    BlogAllComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
