import { Component, OnInit } from '@angular/core';
import { boxingModel } from './boxing.model';
import { boxingService } from './boxing.service';

@Component({ 
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.css']
})
export class BoxingComponent implements OnInit {
  
  data : boxingModel[] = [];

  constructor(private boxingService:boxingService){
    

    for(var game of this.data){
      console.log(game);
      this.data.push(game);
      console.log(game);

    }
  }

  ngOnInit(): void {
    this.boxingService.getBoxing().subscribe((data: boxingModel[]) =>{
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.data.push(game);
      }
    });
  }
}