import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  currentRoute: string = window.location.pathname;


  ngOnInit(): void {

   
}
ngDoCheck(): void {

  this.currentRoute = window.location.pathname;
}
logout() {
  this.authService.logout();
}


}
