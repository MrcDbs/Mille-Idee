import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AreaPersonaleComponent } from '../area-personale/area-personale.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActionsGuardService implements CanDeactivate<AreaPersonaleComponent> {

  constructor() { }

  canDeactivate(areaP: AreaPersonaleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!areaP.loggedOut) {
      alert("Prima di lasciare 'AREA PERSONALE' devi fare il Log Out");
      return false;
    }
    return true;
  }
}
