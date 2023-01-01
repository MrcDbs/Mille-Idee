import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInService } from './log-in.service';


@Injectable({
  providedIn: 'root'
})
export class AreaPersonaleGuard implements CanActivate {

  constructor(private router: Router, private loginService: LogInService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return this.loginService.authenticated == true ? true : false;
    if (!this.loginService.authenticated) {
      this.router.navigate(['log-in']);
      return false;
    }
    return true;
  }


}
