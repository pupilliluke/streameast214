import { Component } from '@angular/core';
import { mock_nba_list } from './mock_nba_list';
import { nbaModel } from './nba.model';
import { teamsList } from './teamsList.model';
import { mock_nbateams_list } from './mock_nbateams_list';

@Component({
  selector: 'app-nbastreams',
  templateUrl: './nbastreams.component.html',
  styleUrls: ['./nbastreams.component.css']
})
export class NbastreamsComponent {

  data : nbaModel[] = [];
  lis : teamsList[] = [];

  constructor(){
    for(var n of mock_nba_list){
    this.data.push(n);
  }

    for(var k of mock_nbateams_list){
      this.lis.push(k);
    }
  }
}



