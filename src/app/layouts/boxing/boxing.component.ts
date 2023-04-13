import { Component, Input } from '@angular/core';
import { boxingModel } from './boxing.model';
import { mock_boxing_list } from './mock_boxing_list';

@Component({ 
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.css']
})
export class BoxingComponent {
  
  data : boxingModel[] = [];

  constructor(){
    

    for(var m of mock_boxing_list){
      this.data.push(m);

    }
  }
}