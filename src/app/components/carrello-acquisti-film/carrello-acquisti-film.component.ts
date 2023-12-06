import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';
import { AcquistoFilm } from 'src/app/models/acquisto-film';
import { environment } from 'src/environments/environment';

import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello-acquisti-film',
  templateUrl: './carrello-acquisti-film.component.html',
  styleUrls: ['./carrello-acquisti-film.component.css'],
})
export class CarrelloAcquistiFilmComponent implements OnInit {
  films: AcquistoFilm[] = [];
  errorMessage = '';
  removeFilmMessage = '';
  BASE_URL: string = environment.BASE_URL;

  private _totale = 0;
  public get totale() {
    return this._totale;
  }

  constructor(private cs: CarrelloService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.cs
      .getFilmsPurchased()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 500) {
            this.snackBar.open(err.error, 'OK');
          }

          return of([] as AcquistoFilm[]);
        })
      )
      .subscribe((films) => {
        this.films = films;
        // const array = [...films];
        // const p = this.films.find((film) => {
        //   array.includes(film);
        // });
        // if (p) {
        //   p.qta++;
        //   this.films = [...new Set(this.films)];
        // }
        this.calcolaTotale();
        this.cs.lenghtPurchasedFilms = this.films.length;
      });
  }

  elimina(id: number) {
    this.cs
      .deleteFilmPurchasedById(id)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 500) {
            this.snackBar.open(err.error, 'OK');
          }

          return of({} as AcquistoFilm);
        })
      )
      .subscribe((_) => {
        this.snackBar.open('Articolo eliminato con successo', 'OK');
        const film: AcquistoFilm | undefined = this.films.find(
          (film) => film.id === id
        );
        this.removeFilmMessage = `${film?.title} è stato rimosso dal Carrello.`;

        this.getFilms();
        this.calcolaTotale();
      });
  }
  calcolaTotale() {
    this._totale = 0;
    for (const f of this.films!) {
      this._totale += Number(f.price);
      console.log(this._totale);
    }
  }
}
