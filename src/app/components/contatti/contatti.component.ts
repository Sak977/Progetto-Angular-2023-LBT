import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ContactDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
export class ContattiComponent {
  model = new ContactDTO();

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  contact() {
    this.authService
      .contact(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBar.open(err.error, 'OK', { duration: 3000 });

          return of(undefined);
        })
      )
      .subscribe((Contact) => {
        if (Contact) {
          this.router.navigate(['/']);
        }
      });
  }
}
