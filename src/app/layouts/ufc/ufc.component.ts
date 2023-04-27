import { Component, OnInit} from '@angular/core';
import { ufcListModel } from './ufc_list.model';
import { ufcService } from './ufc.service';


@Component({
  selector: 'app-ufc',
  templateUrl: './ufc.component.html',
  styleUrls: ['./ufc.component.css']
})
export class UFCComponent implements OnInit {
  data : ufcListModel[] = [];

  constructor(private ufcService: ufcService){
  
   
  }
   ngOnInit(): void {
      this.ufcService.getUfcGames().subscribe((data: ufcListModel []) => {
        console.log("fetching games");
        for(var game of data){
          console.log(game);
          this.data.push(game);
        }
      });
  }
}
