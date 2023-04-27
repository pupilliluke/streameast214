import { Component, OnInit } from '@angular/core';
import { mlbModel } from 'src/app/layouts/mlb-streams/mlb.model';
import { AddGameService } from './add-game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit{

  constructor(private ps: AddGameService){

  }
  ngOnInit():void{
      
  }
  addGame(Game:mlbModel){
    console.log("You clicked add Game button");
    console.log(Game);
    this.ps.addLiveGame(Game);

  }
  
}

