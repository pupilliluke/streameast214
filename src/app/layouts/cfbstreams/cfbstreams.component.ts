import { Component, OnInit } from '@angular/core';
import { cfbModel } from './cfb.model';
import { cfbstreamsService } from './cfbstreams.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';

@Component({
  selector: 'app-cfbstreams',
  templateUrl: './cfbstreams.component.html',
  styleUrls: ['./cfbstreams.component.css']
})
export class cfbStreamsComponent implements OnInit {
  
  data : smalllistgrouplistmodel[] = [];
  static cfbstreamsService: any;

  constructor(private cfbstreamsService:cfbstreamsService){
    

 
  }

  ngOnInit(): void {
    this.cfbstreamsService.getcfbGames().subscribe((data: smalllistgrouplistmodel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.data.push(game);
      }
    });
  }


}
