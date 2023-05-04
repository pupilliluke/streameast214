import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'}
)
export class nhlStreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nhlGamesEndPoint:string= "nhlGames";
 
    constructor(private http:HttpClient){

    }

    getNhlGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.nhlGamesEndPoint + ".json");
    }

   
} 