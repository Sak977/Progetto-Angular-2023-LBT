import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    public cs: CarrelloService
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
