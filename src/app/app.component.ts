import { Component } from '@angular/core';
import { CardListModel } from './components/cards/card_list.model';
import { mock_card_list } from './components/cards/mock_card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Streameast';
  cards: CardListModel[] = [];

  constructor(){
    for(var card of mock_card_list){
        this.cards.push(card);
    }
  }

  



}
