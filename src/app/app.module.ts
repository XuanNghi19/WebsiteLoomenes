import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavigatorComponent } from './widgets/header-navigator/header-navigator.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderNavigatorComponent,
    FooterComponent,
    ServicesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
