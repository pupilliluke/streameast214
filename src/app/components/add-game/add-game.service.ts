// import { HttpClient } from "@angular/common/http";
// import { AddGameComponent } from "./add-game.component";
import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "@angular/fire/compat/database";
import { listgrouplistmodel } from "../list-group/list-group.list.model";


@Injectable(
    {providedIn: 'root'}
)

export class AddGameService {
    
    constructor(private db: AngularFireDatabase){
        
    }

    getLiveGames(){
        return this.db.list<listgrouplistmodel>("liveGames").valueChanges();
    }

    
    addLiveGame(Game: listgrouplistmodel){
        console.log("addLiveGame() called, new game should be pushed");
        this.db.list<listgrouplistmodel>("liveGames").push(Game);

    }
}