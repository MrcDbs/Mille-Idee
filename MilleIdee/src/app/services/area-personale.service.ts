import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../model/Utente';
import { catchError, Observable, of, throwError } from 'rxjs';
// import { BusinessUser } from '../model/businessUser';


@Injectable({
  providedIn: 'root'
})
export class AreaPersonaleService {
  private urlGetById = 'http://localhost:91/user/findById/';
  private urlCreateUser = 'http://localhost:91/user/create';
  //private requestUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  sendRequest(id: number): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.urlGetById + id)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(() => err)
        })
      );;
  }

  // createBusinessUser(user: BusinessUser): Observable<BusinessUser> {
  //   return this.http.post<BusinessUser>(this.urlCreateUser, user)
  //     .pipe(
  //       catchError((err: HttpErrorResponse) => {
  //         return throwError(() => err)
  //       })
  //     );;
  // }


}
