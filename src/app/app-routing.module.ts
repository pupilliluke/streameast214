import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { nhlStreamsComponent } from './nhlStreamsComponent/nhlStreams-layout.component';
import { MlbStreamsComponent } from './mlb-streams/mlb-streams.component';
import { NbastreamsComponent } from './nbastreams/nbastreams.component';
import { NflstreamsComponent } from './nflstreams/nflstreams.component';
import { cfbStreamsComponent } from './cfbstreams/cfbstreams.component';
import { NCAAbasketballComponent } from './ncaabasketball/ncaabasketball.component';
import { Formula1Component } from './formula1/formula1.component';
import { BoxingComponent } from './boxing/boxing.component';
import { UFCComponent } from './ufc/ufc.component';
import { AboutComponent } from './about/about.component';

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
    {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
