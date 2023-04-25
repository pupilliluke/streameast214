import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { nhlStreamsComponent } from './layouts/nhlStreamsComponent/nhlStreams-layout.component';
import { MlbStreamsComponent } from './layouts/mlb-streams/mlb-streams.component';
import { NbastreamsComponent } from './layouts/nbastreams/nbastreams.component';
import { NflstreamsComponent } from './layouts/nflstreams/nflstreams.component';
import { cfbStreamsComponent } from './layouts/cfbstreams/cfbstreams.component';
import { NCAAbasketballComponent } from './layouts/ncaabasketball/ncaabasketball.component';
import { Formula1Component } from './layouts/formula1/formula1.component';
import { BoxingComponent } from './layouts/boxing/boxing.component';
import { UFCComponent } from './layouts/ufc/ufc.component';
import { AboutComponent } from './components/about/about.component';
import { StreamPageComponent } from './components/stream-page/stream-page.component';

const routes: Routes = [
    
    {path: '', component: HomePageComponent},
    {path: 'nhlstreams', component: nhlStreamsComponent},
    {path: 'mlbstreams', component: MlbStreamsComponent},
    {path: 'nbastreams', component: NbastreamsComponent},
    {path: 'nflstreams', component: NflstreamsComponent},
    {path: 'cfbstreams', component: cfbStreamsComponent},
    {path: 'NCAABasketball', component: NCAAbasketballComponent},
    {path: 'Formula1', component: Formula1Component},
    {path: 'Boxing', component: BoxingComponent},
    {path: 'UFC', component: UFCComponent},
    {path: 'about', component: AboutComponent},
    {path: 'stream-page', component: StreamPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
