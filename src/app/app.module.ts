import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent, SwiperModule } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation, FreeMode } from "swiper";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
SwiperCore.use([Autoplay, Pagination, Navigation, FreeMode, ])
