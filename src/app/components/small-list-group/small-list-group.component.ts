import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-list-group',
  templateUrl: './small-list-group.component.html',
  styleUrls: ['./small-list-group.component.css']
})
export class SmallListGroupComponent {
  @Input() Sport: String;
  @Input() Teams: String;
  @Input() Date: String;

  constructor(){
    this.Sport= " ";
    this.Teams = " " ;
    this.Date = " " ;

  }
}
