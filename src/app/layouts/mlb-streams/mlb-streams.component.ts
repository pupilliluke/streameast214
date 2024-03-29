import { Component, OnInit } from '@angular/core';
import { teamsList } from './teamsList.model';
import { mock_mlbteams_list } from './mock_mlbteams';
import { mlbGamesService } from './mlbGames.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';

@Component({
  selector: 'app-mlb-streams',
  templateUrl: './mlb-streams.component.html',
  styleUrls: ['./mlb-streams.component.css']
})
export class MlbStreamsComponent implements OnInit {
  games: smalllistgrouplistmodel[] = []; 
  lis: teamsList[] =[];
    
  constructor(private mlbGamesService:mlbGamesService){
    
      for(var game of this.games){
      this.games.push(game);
      console.log(game);
      }

      for( var k of mock_mlbteams_list){
        this.lis.push(k);
      }
  }

  ngOnInit(): void {
      this.mlbGamesService.getMlbGames().subscribe((data: smalllistgrouplistmodel []) => {
        console.log("fetching games");
        for(var game of data){
          console.log(game);
          this.games.push(game);
        }
      });
  }
}
