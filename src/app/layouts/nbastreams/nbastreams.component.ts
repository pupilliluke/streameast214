import { Component, OnInit } from '@angular/core';
import { teamsList } from './teamsList.model';
import { mock_nbateams_list } from './mock_nbateams_list';
import { nbastreamsService } from './nbastreams.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';


@Component({
  selector: 'app-nbastreams',
  templateUrl: './nbastreams.component.html',
  styleUrls: ['./nbastreams.component.css']
})
export class NbastreamsComponent implements OnInit {

  games : smalllistgrouplistmodel[] = [];
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
    this.nbastreamsService.getNbaGames().subscribe((data: smalllistgrouplistmodel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.games.push(game);
      }
    });
}
}



