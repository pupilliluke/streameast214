import { Component, OnInit } from '@angular/core';
import { nbaModel } from './nba.model';
import { teamsList } from './teamsList.model';
import { mock_nbateams_list } from './mock_nbateams_list';
import { nbastreamsService } from './nbastreams.service';


@Component({
  selector: 'app-nbastreams',
  templateUrl: './nbastreams.component.html',
  styleUrls: ['./nbastreams.component.css']
})
export class NbastreamsComponent implements OnInit {

  games : nbaModel[] = [];
  lis : teamsList[] = [];

  constructor(private nbastreamsService:nbastreamsService){
      for(var game of this.games){
      this.games.push(game);
    }

      for(var k of mock_nbateams_list){
        this.lis.push(k);
      }
  }


  ngOnInit(): void {
    this.nbastreamsService.getNbaGames().subscribe((data: nbaModel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.games.push(game);
      }
    });
}
}



