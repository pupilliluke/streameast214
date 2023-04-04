import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbartestComponent } from './navbartest/navbartest.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { nhlStreamsComponent } from './nhlStreamsComponent/nhlStreams-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UpcomingNavBarComponent } from './upcoming-nav-bar/upcoming-nav-bar.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartestComponent,
    UpcomingNavBarComponent,
    CardsComponent,
    ListGroupComponent,
    nhlStreamsComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
