import { Component, OnInit } from '@angular/core';
import { cfbModel } from './cfb.model';
import { cfbstreamsService } from './cfbstreams.service';

@Component({
  selector: 'app-cfbstreams',
  templateUrl: './cfbstreams.component.html',
  styleUrls: ['./cfbstreams.component.css']
})
export class cfbStreamsComponent implements OnInit {
  
  data : cfbModel[] = [];
  static cfbstreamsService: any;

  constructor(private cfbstreamsService:cfbstreamsService){
    

 
  }

  ngOnInit(): void {
    this.cfbstreamsService.getcfbGames().subscribe((data: cfbModel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.data.push(game);
      }
    });
  }


}
