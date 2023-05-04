import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'}
)
export class ufcService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private ufcEndPoint:string= "UFC";
 
    constructor(private http:HttpClient){

    }

    getUfcGames(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.ufcEndPoint + ".json");
    }

  
} 