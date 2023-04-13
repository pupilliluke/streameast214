import { Component } from '@angular/core';
import { CardListModel } from '../components/cards/card_list.model';
import { mock_card_list } from '../components/cards/mock_card_list';
import { listgrouplistmodel } from '../components/list-group/list-group.list.model';
import { mock_listGroup_list } from '../components/list-group/mock_listGroup_list';
import { mock_boxing_list } from '../layouts/boxing/mock_boxing_list';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cards: CardListModel[] = [];
  data : listgrouplistmodel[] = [];
  
  
  constructor(){
    for(var card of mock_card_list){
        this.cards.push(card);
    }

    for(var n of mock_listGroup_list){
        this.data.push(n);
    }
   
    for(var m of mock_boxing_list){
      this.data.push(m);
    }
  }


}
