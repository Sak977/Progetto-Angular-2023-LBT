import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginDTO, RegisterDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model = this.fb.group({
    nome: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        ),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$'
        ),
      ],
    ],
  });
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  register() {
    this.authService
      .register(this.model.value as RegisterDTO)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBar.open(err.error, 'OK', { duration: 3000 });

          return of(undefined);
        })
      )
      .subscribe((loggedUser) => {
        if (loggedUser) {
          this.authService.setLoggedUser(loggedUser);
          this.router.navigate(['']);
        }
      });
  }
}
