import { Component, Input } from '@angular/core';
import { idText } from 'typescript';

@Component({
  selector: 'app-navbartest',
  templateUrl: './navbartest.component.html',
  styleUrls: ['./navbartest.component.css']
})
export class NavbartestComponent {
  @Input() League: string;
  @Input() Link: string;

  constructor(){
    this.League = " ";
    this.Link = " " ;
  }
}
