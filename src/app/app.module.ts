import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbartestComponent } from './components/navbartest/navbartest.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { nhlStreamsComponent } from './layouts/nhlStreamsComponent/nhlStreams-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UpcomingNavBarComponent } from './components/upcoming-nav-bar/upcoming-nav-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { MlbStreamsComponent } from './layouts/mlb-streams/mlb-streams.component';
import { NbastreamsComponent } from './layouts/nbastreams/nbastreams.component';
import { NflstreamsComponent } from './layouts/nflstreams/nflstreams.component';
import { cfbStreamsComponent } from './layouts/cfbstreams/cfbstreams.component';
import { NCAAbasketballComponent } from './layouts/ncaabasketball/ncaabasketball.component';
import { Formula1Component } from './layouts/formula1/formula1.component';
import { BoxingComponent } from './layouts/boxing/boxing.component';
import { UFCComponent } from './layouts/ufc/ufc.component';
import { PopupComponent } from './components/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartestComponent,
    UpcomingNavBarComponent,
    CardsComponent,
    ListGroupComponent,
    nhlStreamsComponent,
    HomePageComponent,
    MlbStreamsComponent,
    NbastreamsComponent,
    NflstreamsComponent,
    cfbStreamsComponent,
    NCAAbasketballComponent,
    Formula1Component,
    BoxingComponent,
    UFCComponent,
    PopupComponent,
    UserInfoComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
