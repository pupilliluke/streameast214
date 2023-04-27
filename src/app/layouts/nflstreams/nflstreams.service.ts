import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { nflModel } from "./nfl.model";

@Injectable(
    {providedIn:'root'} 
)

export class nflstreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nflGamesEndPoint:string= "nflGames";
 
    constructor(private http:HttpClient){ 
 
    } 

    getnflGames(){
        return this.http.get<nflModel []>(this.baseUrl + this.nflGamesEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<nflModel>(this.baseUrl + this.nflGamesEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames/0.json    
    }
}  