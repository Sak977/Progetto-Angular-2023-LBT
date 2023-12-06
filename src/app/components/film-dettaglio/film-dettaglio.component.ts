import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription, catchError, config, of } from 'rxjs';
import { AcquistoFilmPost } from 'src/app/models/acquisto-film';
import { Film, FilmResponseDetail } from 'src/app/models/film';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-dettaglio',
  templateUrl: './film-dettaglio.component.html',
  styleUrls: ['./film-dettaglio.component.css'],
})
export class FilmDettaglioComponent {
  film?: FilmResponseDetail;
  subscription?: Subscription;
  model?: AcquistoFilmPost;
  urlImage = environment.BASE_URL;
  urlImageDettaglio = environment.BASE_URL + 'w400';
  // 'http://image.tmdb.org/t/p/w400';

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cs: CarrelloService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.subscription = this.filmService.getFilmById(id).subscribe((dati) => {
        console.log(dati);
        this.film = dati;
        this.urlImageDettaglio += dati.poster_path;
      });
    }
  }

  acquista() {
    if (this.authService.isUserLogged) {
      this.model = new AcquistoFilmPost(
        this.authService.getLoggedUser()!.user.id,
        this.film?.title!,
        this.film?.poster_path!,
        this.film?.overview!
      );
    }

    console.log(this.model);
    this.cs
      .nuovoAcquisto(this.model!)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.snackBar.open(
              "Per acquistare un film è necessario l'accesso",
              'OK',
              { duration: 3000 }
            );
            this.router.navigate(['/', 'main']);
          } else {
            this.snackBar.open(err.error, 'OK');
          }
          return of(undefined);
        })
      )
      .subscribe((acquistoFilm) => {
        if (acquistoFilm) {
          this.router.navigate(['/', 'main']);
          this.snackBar.open(
            `Il film ${this.film?.title!} è stato aggiunto al carrello`,
            'OK'
          );
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
