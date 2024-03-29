import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaPersonaleInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizeRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    return next.handle(tokenizeRequest);
  }
}
