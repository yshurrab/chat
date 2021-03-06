import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {EventBrokerService} from './event-broker.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private _eventBroker: EventBrokerService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.auth.isAuthenticated().then(({isAuth, user}) => {
        this._eventBroker.emit('logged-user', {isAuth, user});
        if (!isAuth) {
          this.router.navigate(['login']);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });

  }


}
