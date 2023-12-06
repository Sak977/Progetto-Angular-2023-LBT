import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Film, FilmResponse } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent {
  currentPage = 0;
  ricerca = '';

  BASE_URL: string = environment.BASE_URL;

  films: Film[] = [];

  errorMessage = '';
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.filmService
      .getFilms(this.currentPage + 1)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = 'Errore nel caricamento dei film';

          return of({} as FilmResponse);
        })
      )
      .subscribe((dati) => {
        this.films = this.films.concat(dati.results);
        this.currentPage = dati.page;
      });
  }

  searchFilm() {
    this.filmService.getFilmBySearch(this.ricerca).subscribe((dati) => {
      this.films = dati.results;
    });
  }
}
