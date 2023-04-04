import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html', 
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  @Input() Img: string;
  @Input() Link: string;
  @Input() Description: string;

  constructor(){
    this.Img = "Image here";
    this.Link = "Link to target sport";
    this.Description = "";

  }
}
