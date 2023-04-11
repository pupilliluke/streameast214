import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
      console.log("sending a get request to the server");
      this.getUserInfo();
      console.log("Registering showUserInfo subscriber");
      this.showUserInfo();

  }

    getUserInfo(){
      return this.http.get<UserInfo>('https://streameast-app-default-rtdb.firebaseio.com/.json')
    }

    showUserInfo(){
      this.getUserInfo().subscribe((data: UserInfo) => {
          console.log(data);
          this.myInfo = data;

      })
    }
}
