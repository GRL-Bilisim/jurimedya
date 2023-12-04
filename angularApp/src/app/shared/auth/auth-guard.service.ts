import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from 'app/user/account.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    return true;
    let isAuth = this.accountService.isAdmin();
    if (!isAuth) {
      this.router.navigate(['/pages/login']);
    }
    else {
      console.log('isAuth: ' + isAuth);
      return true;
    }
  }
}
