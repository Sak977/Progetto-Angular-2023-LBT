import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoggedUser, LoginDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model = new LoginDTO();


  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.authService
      .login(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBar.open(err.error, 'OK', { duration: 3000 });

          return of(undefined);
        })
      )
      .subscribe((loggedUser) => {
        if (loggedUser) {
          this.authService.setLoggedUser(loggedUser);
          this.router.navigate(['/']);
        }
      });
  }
}
