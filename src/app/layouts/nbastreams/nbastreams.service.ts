import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'} 
)

export class nbastreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nbaGamesEndPoint:string= "nbaGames";
 
    constructor(private http:HttpClient){ 
 
    } 

    getNbaGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.nbaGamesEndPoint + ".json");
    }

    
}  