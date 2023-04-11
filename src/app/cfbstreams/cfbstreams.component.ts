import { Component } from '@angular/core';
import { cfbModel } from './cfb.model';
import { mock_cfb_list } from './mock_cfb_list';

@Component({
  selector: 'app-cfbstreams',
  templateUrl: './cfbstreams.component.html',
  styleUrls: ['./cfbstreams.component.css']
})
export class cfbStreamsComponent {
  
  data : cfbModel[] = [];

  constructor(){
    

    for(var m of mock_cfb_list){
      this.data.push(m);

    }
  }
}
