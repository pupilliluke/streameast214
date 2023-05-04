// import { HttpClient } from "@angular/common/http";
import { homePageModel } from "./homePage.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { listgrouplistmodel } from "../components/list-group/list-group.list.model";

@Injectable(
    {providedIn:'root'}
)
export class homePageService{
    private baseUrl:string = "https://streameast-app-default-rtdb.firebaseio.com/";
    private homePageEndPoint:string= "liveGames";
 
    constructor(private db:AngularFireDatabase){

    }

    gethomeGames(){
        return this.db.list<listgrouplistmodel>(this.homePageEndPoint).valueChanges();
    }

   
} 