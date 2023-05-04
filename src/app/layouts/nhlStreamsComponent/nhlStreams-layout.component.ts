import { Component, OnInit } from "@angular/core";
import { teamsList } from "./teamsList.model";
import { mock_nhlteams_list } from "./mock_nhlTeams_list";
import { nhlStreamsService } from "./nhlStreams.service";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Component({
    selector: 'nhlStreams-layout',
    templateUrl: 'nhlStreams-layout.component.html',
    styleUrls:  ['nhlStreams-layout.component.css']
})

export class nhlStreamsComponent  implements OnInit{
    data : smalllistgrouplistmodel[]=[];
    lis : teamsList[] = [];


    constructor(private nhlStreamsService:nhlStreamsService){
        

      for(var k of mock_nhlteams_list){
        this.lis.push(k);
      }
      }
      ngOnInit(): void {
        this.nhlStreamsService.getNhlGames().subscribe((data: smalllistgrouplistmodel []) => {
          console.log("fetching games");
          for(var game of data){
            console.log(game);
            this.data.push(game);
          }
        });
    }

}




