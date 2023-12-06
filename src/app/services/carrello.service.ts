import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {
  Observable,
  Subscribable,
  Subscriber,
  Subscription,
  catchError,
  of,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AcquistoFilmPost, AcquistoFilm } from '../models/acquisto-film';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  lenghtPurchasedFilms: number = 0;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  getFilmsPurchased(): Observable<AcquistoFilm[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer ' + this.authService.getLoggedUser()?.accessToken,
      }),
    };

    return this.http
      .get<AcquistoFilm[]>(
        environment.JSON_SERVER_BASE_URL + '/films-acquistati',
        httpOptions
      )
      .pipe(
        tap({
          next: (articoli) =>
            console.log(articoli.length + ' film ricevuti dal server.'),
          error: (e: HttpErrorResponse) =>
            console.error('SERVIZIO:', e.message),
        })
      );
  }

  nuovoAcquisto(model: AcquistoFilmPost): Observable<AcquistoFilm> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer ' + this.authService.getLoggedUser()?.accessToken,
      }),
    };

    return this.http.post<AcquistoFilm>(
      environment.JSON_SERVER_BASE_URL + '/films-acquistati',
      model,
      httpOptions
    );
  }

  deleteFilmPurchasedById(id: number): Observable<AcquistoFilm> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer ' + this.authService.getLoggedUser()?.accessToken,
      }),
    };

    return this.http.delete<AcquistoFilm>(
      environment.JSON_SERVER_BASE_URL + '/films-acquistati/' + id,
      httpOptions
    );
  }
}
