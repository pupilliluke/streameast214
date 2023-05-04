import { Component, OnInit } from '@angular/core';
import { boxingModel } from './boxing.model';
import { boxingService } from './boxing.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';

@Component({ 
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.css']
})
export class BoxingComponent implements OnInit {
  
  data : smalllistgrouplistmodel[] = [];

  constructor(private boxingService:boxingService){
    

    for(var game of this.data){
      console.log(game);
      this.data.push(game);
      console.log(game);

    }
  }

  ngOnInit(): void {
    this.boxingService.getBoxing().subscribe((data: smalllistgrouplistmodel[]) =>{
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.data.push(game);
      }
    });
  }
}