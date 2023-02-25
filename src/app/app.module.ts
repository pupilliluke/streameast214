import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbartestComponent } from './navbartest/navbartest.component';
import { UpcomingNavBarComponent } from './upcoming-nav-bar/upcoming-nav-bar.component';

import { CardsComponent } from './cards/cards.component';
import { ListGroupComponent } from './list-group/list-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartestComponent,
    UpcomingNavBarComponent,
    CardsComponent,
    ListGroupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
