import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'} 
)

export class nflstreamsService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private nflGamesEndPoint:string= "nflGames";
 
    constructor(private http:HttpClient){ 
 
    } 

    getnflGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.nflGamesEndPoint + ".json");
    }

   
}  