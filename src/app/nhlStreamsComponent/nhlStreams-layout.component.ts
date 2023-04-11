import { Component } from "@angular/core";
import { nhlModel } from "./nhl.model";
import { mock_nhl_list } from "./mock_nhl_list";

@Component({
    selector: 'nhlStreams-layout',
    templateUrl: 'nhlStreams-layout.component.html',
    styleUrls:  ['nhlStreams-layout.component.css']
})

export class nhlStreamsComponent{
    data : nhlModel[]=[];

    constructor(){
        for(var n of mock_nhl_list){
        this.data.push(n);
      }
      }
}