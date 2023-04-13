import { HttpClient } from "@angular/common/http";
import { mlbModel } from "./mlb.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class mlbGamesService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private mlbGamesEndPoint:string= "mlbGames";
 
    constructor(private http:HttpClient){

    }

    getMlbGames(){
        return this.http.get<mlbModel []>(this.baseUrl + this.mlbGamesEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<mlbModel>(this.baseUrl + this.mlbGamesEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames/0.json    
    }
} 