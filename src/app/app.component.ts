import { Component } from '@angular/core';
import { CardListModel } from './cards/card_list.model';
import { mock_card_list } from './cards/mock_card_list';
import { mock_listGroup_list } from './list-group/mock_listGroup_list';

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
