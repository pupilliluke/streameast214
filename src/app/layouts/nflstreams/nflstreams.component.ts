import { Component, OnInit } from '@angular/core';
import { teamsList } from './nfl_teamsList.model';
import { mock_nbateams_list } from './mock_nflteams_list';
import { nflstreamsService } from './nflstreams.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';

@Component({
  selector: 'app-nflstreams',
  templateUrl: './nflstreams.component.html',
  styleUrls: ['./nflstreams.component.css']
})
export class NflstreamsComponent implements OnInit {

  games : smalllistgrouplistmodel[] = [];
  lis : teamsList[] = [];

  constructor(private nflstreamsService:nflstreamsService){
      for(var game of this.games){
      this.games.push(game);
    }

      for(var k of mock_nbateams_list){
        this.lis.push(k);
      }
  }


  ngOnInit(): void {
    this.nflstreamsService.getnflGames().subscribe((data: smalllistgrouplistmodel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.games.push(game);
      }
    });
}
}



