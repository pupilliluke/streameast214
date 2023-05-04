import { Component, OnInit} from '@angular/core';
import { ufcService } from './ufc.service';
import { smalllistgrouplistmodel } from 'src/app/components/small-list-group/small-list-group.list.model';


@Component({
  selector: 'app-ufc',
  templateUrl: './ufc.component.html',
  styleUrls: ['./ufc.component.css']
})
export class UFCComponent implements OnInit {
  data : smalllistgrouplistmodel[] = [];

  constructor(private ufcService: ufcService){
  
   
  }
   ngOnInit(): void {
      this.ufcService.getUfcGames().subscribe((data: smalllistgrouplistmodel []) => {
        console.log("fetching games");
        for(var game of data){
          console.log(game);
          this.data.push(game);
        }
      });
  }
}
