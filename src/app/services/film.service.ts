import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { FilmResponse, FilmResponseDetail } from '../models/film';
import { AcquistoFilm, AcquistoFilmPost } from '../models/acquisto-film';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseURL = environment.FILM_SERVER_BASE_URL;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.FILM_SERVER_API_READ_ACCESS_TOKEN,
    }),
  };

  getFilms(page: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `${this.baseURL}/3/movie/popular?page=${page}&language=it-IT`,
      // 'https://api.themoviedb.org/3/movie/popular?page=2&language=it-IT'
      this.httpOptions
    );
  }

  getFilmById(id: string): Observable<FilmResponseDetail> {
    return this.http.get<FilmResponseDetail>(
      `${this.baseURL}/3/movie/${id}?language=it-IT&append_to_response=credits,similar`,
      this.httpOptions
    );
  }
  getVideoById(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}/3/movie/${id}/videos?language=it-IT`,
      this.httpOptions
    );
  }
  getFilmBySearch(input: string): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `${this.baseURL}/3/search/movie?query=${input}&include_adult=false&language=it-IT&page=1`,
      this.httpOptions
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
}
