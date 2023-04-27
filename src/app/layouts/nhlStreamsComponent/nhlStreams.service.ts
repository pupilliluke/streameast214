import { HttpClient } from "@angular/common/http";
import { nhlModel } from "./nhl.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class nhlStreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nhlGamesEndPoint:string= "nhlGames";
 
    constructor(private http:HttpClient){

    }

    getNhlGames(){
        return this.http.get<nhlModel []>(this.baseUrl + this.nhlGamesEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<nhlModel>(this.baseUrl + this.nhlGamesEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames/0.json    
    }
} 