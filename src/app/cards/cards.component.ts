import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  @Input() img: string;
  link: string;
  description: string;

  constructor(){
    this.img = " ";
    this.link = "Picture of target sport";
    this.description = "STREAMS";

  }
}
