import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'}
)
export class mlbGamesService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private mlbGamesEndPoint:string= "mlbGames";
 
    constructor(private http:HttpClient){

    }

    getMlbGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.mlbGamesEndPoint + ".json");
    }

    
} 