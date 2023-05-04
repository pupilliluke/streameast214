import { HttpClient } from "@angular/common/http";
import { boxingModel } from "./boxing.model";
import { Injectable } from "@angular/core";
import { smalllistgrouplistmodel } from "src/app/components/small-list-group/small-list-group.list.model";

@Injectable(
    {providedIn:'root'}
)
export class boxingService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private boxingEndPoint:string= "Boxing";
 
    constructor(private http:HttpClient){

    }

    getBoxing(){
        return this.http.get<smalllistgrouplistmodel []>(this.baseUrl + this.boxingEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<smalllistgrouplistmodel>(this.baseUrl + this.boxingEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames/0.json    
    }
} 