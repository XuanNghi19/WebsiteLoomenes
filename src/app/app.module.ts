import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavigatorComponent } from './widgets/header-navigator/header-navigator.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ModalComponent } from './modal/modal.component';
import { BlogParticularComponent } from './blog-particular/blog-particular.component';
import { LichNewComponent } from './lich-new/lich-new.component';
import { LichPage3Component } from './lich-page3/lich-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderNavigatorComponent,
    FooterComponent,
    ServicesPageComponent,
    CartPageComponent,
    BlogPageComponent,
    ModalComponent,
    BlogParticularComponent,
    LichNewComponent,
    LichPage3Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
