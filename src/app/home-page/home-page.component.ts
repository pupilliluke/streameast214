import { Component } from '@angular/core';
import { CardListModel } from '../cards/card_list.model';
import { mock_card_list } from '../cards/mock_card_list';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cards: CardListModel[] = [];

  constructor(){
    for(var card of mock_card_list){
        this.cards.push(card);
    }
  }
}
