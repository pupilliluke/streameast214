import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cfbModel } from "./cfb.model";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'} 
)

export class cfbstreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private cfbGamesEndPoint:string= "cfbGames";
 
    constructor(private http:HttpClient){ 
 
    } 

    getcfbGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.cfbGamesEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<smalllistgrouplistmodel>(this.baseUrl + this.cfbGamesEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames
  //      https://streameast-app-default-rtdb.firebaseio.com/nbaGames/0.json    
    }
}  