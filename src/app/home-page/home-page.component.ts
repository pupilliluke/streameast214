import { Component } from '@angular/core';
import { CardListModel } from '../components/cards/card_list.model';
import { mock_card_list } from '../components/cards/mock_card_list';
import { homePageModel } from './homePage.model';
import { homePageService } from './homePage.service';
import { listgrouplistmodel } from '../components/list-group/list-group.list.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cards: CardListModel[] = [];
  games : listgrouplistmodel[] = [];
  
  
  constructor(private homePageService:homePageService){
    for(var card of mock_card_list){
        this.cards.push(card);
    }
    for(var game of this.games){
      this.games.push(game);
      console.log(game);
      }
   
  }

  ngOnInit(): void {
    this.homePageService.gethomeGames().subscribe((data: listgrouplistmodel []) => {
      console.log("fetching games");
      for(var game of data){
        console.log(game);
        this.games.push(game);
      }
    });
}


}
