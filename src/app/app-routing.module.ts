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
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { AuthComponent } from './auth/auth.component';


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
    {path: 'loginPage', component: LoginPageComponent},
    {path: 'registerPage', component:RegisterPageComponent},
    {path: 'admin', component:AddGameComponent},
    {path: 'auth', component: AuthComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
