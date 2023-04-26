import { HttpClient } from "@angular/common/http";
import { homePageModel } from "./homePage.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class homePageService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private homePageEndPoint:string= "liveGames";
 
    constructor(private http:HttpClient){

    }

    gethomeGames(){
        return this.http.get<homePageModel []>(this.baseUrl + this.homePageEndPoint + ".json");
    }

    getGame0(index:number){
        
        return this.http.get<homePageModel>(this.baseUrl + this.homePageEndPoint + '/' + index + '.json');
  //      https://streameast-app-default-rtdb.firebaseio.com/homePage
  //      https://streameast-app-default-rtdb.firebaseio.com/homePage/0.json    
    }
} 