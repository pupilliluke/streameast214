import { HttpClient } from "@angular/common/http";
import { ufcListModel } from "./ufc_list.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class ufcService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private ufcEndPoint:string= "UFC";
 
    constructor(private http:HttpClient){

    }

    getUfcGames(){
        return this.http.get<ufcListModel []>(this.baseUrl + this.ufcEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<ufcListModel>(this.baseUrl + this.ufcEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames
  //      https://streameast-app-default-rtdb.firebaseio.com/mlbGames/0.json    
    }
} 