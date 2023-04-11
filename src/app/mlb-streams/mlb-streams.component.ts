import { Component } from '@angular/core';
import { mock_mlb_list } from './mock_mlb_list';
import { mlbModel } from './mlb.model';
import { teamsList } from './teamsList.model';
import { mock_mlbteams_list } from './mock_mlbteams';

@Component({
  selector: 'app-mlb-streams',
  templateUrl: './mlb-streams.component.html',
  styleUrls: ['./mlb-streams.component.css']
})
export class MlbStreamsComponent {
  data: mlbModel[] = [];
  lis: teamsList[] =[];

  constructor(){
        for(var n of mock_mlb_list){
        this.data.push(n);
        }

        for( var k of mock_mlbteams_list){
          this.lis.push(k);
        }

    
  
  }
}
