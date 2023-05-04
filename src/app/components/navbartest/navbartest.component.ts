import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { idText } from 'typescript';

@Component({
  selector: 'app-navbartest',
  templateUrl: './navbartest.component.html',
  styleUrls: ['./navbartest.component.css']
})
export class NavbartestComponent implements OnInit {
  @Input() League: string;
  @Input() Link: string;

  private user!:Subscription;
  public isAuthenticated:boolean = false;


  constructor(private authentification:AuthService){
    this.League = " ";
    this.Link = " " ;


  }

  ngOnInit(): void {
    this.user = this.authentification.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
    }
}
