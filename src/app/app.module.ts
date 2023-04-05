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
import { MlbStreamsComponent } from './mlb-streams/mlb-streams.component';
import { NbastreamsComponent } from './nbastreams/nbastreams.component';
import { NflstreamsComponent } from './nflstreams/nflstreams.component';
import { CfbstreamsComponent } from './cfbstreams/cfbstreams.component';
import { NCAAbasketballComponent } from './ncaabasketball/ncaabasketball.component';
import { Formula1Component } from './formula1/formula1.component';
import { BoxingComponent } from './boxing/boxing.component';
import { UFCComponent } from './ufc/ufc.component';

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
    CfbstreamsComponent,
    NCAAbasketballComponent,
    Formula1Component,
    BoxingComponent,
    UFCComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
