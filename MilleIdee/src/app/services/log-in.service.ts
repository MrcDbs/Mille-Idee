import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Token } from '../model/tokenResp';
import { Utente } from '../model/Utente';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private logInUrl = 'http://localhost:80/auth/login';
  private signInUrl = 'http://localhost:80/auth/register';

  authenticated = false;
  constructor(private http: HttpClient, private auth: JwtHelperService) { }

  login(user: Utente): Observable<Token> {
    return this.http.post<Token>(this.logInUrl, user)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);

          // return throwError(() => err);
        })
      );
  }

  signIn(user: Utente): Observable<Token> {
    return this.http.post<Token>(this.signInUrl, user)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err);

          // return throwError(() => err);
        })
      );
  }
  isAuthenticated(token: string): boolean {
    return !this.auth.isTokenExpired(token);
  }
}
