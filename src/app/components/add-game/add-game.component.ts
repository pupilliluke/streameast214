import { Component, OnInit } from '@angular/core';
import { AddGameService } from './add-game.service';
import { NgForm } from '@angular/forms';
import { listgrouplistmodel } from '../list-group/list-group.list.model';

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
  addGame(Game:listgrouplistmodel){
    console.log("You clicked add Game button");
    console.log(Game);
    this.ps.addLiveGame(Game);

  }

  
  
  
}

