import { Component, OnInit } from '@angular/core';
import { formula1Service } from './formula1.service';
import { mlbModel } from './mlb.model';

@Component({
  selector: 'app-formula1',
  templateUrl: './formula1.component.html',
  styleUrls: ['./formula1.component.css']
})
export class Formula1Component implements OnInit{
  data : mlbModel[] = [];

  constructor(private formula1Service:formula1Service){
    for(var game of this.data){
          console.log(game);
          this.data.push(game);
          console.log(game);

        }
  }

ngOnInit(): void {

  this.formula1Service.getFormula1().subscribe((data: mlbModel[]) =>{
    console.log("fetching games");
    for(var game of data){
      console.log(game);
      this.data.push(game);
    }
  });
}
}


