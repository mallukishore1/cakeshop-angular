import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    let user = localStorage.getItem("isLoggedIn");
    return user != null ? user =='true': false;
  }

  getRole(){
    return localStorage.getItem("ROLE")
  }

  logout(){
    localStorage.clear();
    window.location.href="login";
  }
}
