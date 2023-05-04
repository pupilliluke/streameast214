import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {
    @Input() Sport: String;
    @Input() Teams: String;
    @Input() Date: String;
    @Input() Link: String;

    constructor(){
      this.Sport= " ";
      this.Teams = " " ;
      this.Date = " " ;
      this.Link = " ";
    }
}
