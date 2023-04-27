// import { HttpClient } from "@angular/common/http";
// import { AddGameComponent } from "./add-game.component";
import { mlbModel } from "src/app/layouts/mlb-streams/mlb.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable(
    {providedIn: 'root'}
)

export class AddGameService {
    
    constructor(private db: AngularFireDatabase){
        
    }

    getLiveGames(){
        return this.db.list<mlbModel>("liveGames").valueChanges();
    }

    
    addLiveGame(Game: mlbModel){
        console.log("addLiveGame() called, new game should be pushed");
        this.db.list<mlbModel>("liveGames").push(Game);

    }
}