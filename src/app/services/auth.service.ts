import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  LoginDTO,
  LoggedUser,
  RegisterDTO,
  ContactDTO,
  Contact,
} from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      environment.JSON_SERVER_BASE_URL + '/login',
      model
    );
  }

  register(model: RegisterDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      environment.JSON_SERVER_BASE_URL + '/register',
      model
    );
  }
  contact(model: ContactDTO): Observable<Contact> {
    return this.http.post<Contact>(
      environment.JSON_SERVER_BASE_URL + '/contatti',
      model
    );
  }

  setLoggedUser(user: LoggedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem('user');

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }

    return null;
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
