import { Component } from '@angular/core';
import { mock_ufc_list } from './mock_ufc_list';
import { ufcListModel } from './ufc_list.model';

@Component({
  selector: 'app-ufc',
  templateUrl: './ufc.component.html',
  styleUrls: ['./ufc.component.css']
})
export class UFCComponent {
  data : ufcListModel[] = [];

  constructor(){
  
    for(var m of mock_ufc_list){
      this.data.push(m);

    }
  }
}
