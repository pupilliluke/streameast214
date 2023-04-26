import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { nbaModel } from "./nba.model";

@Injectable(
    {providedIn:'root'} 
)

export class nbastreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nbaGamesEndPoint:string= "nbaGames";
 
    constructor(private http:HttpClient){ 
 
    } 

    getNbaGames(){
        return this.http.get<nbaModel []>(this.baseUrl + this.nbaGamesEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<nbaModel>(this.baseUrl + this.nbaGamesEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames/0.json    
    }
}  