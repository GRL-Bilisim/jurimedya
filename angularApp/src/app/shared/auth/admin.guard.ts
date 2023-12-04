import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from 'app/user/account.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.accountService.user === undefined) {
    //   this.router.navigate(['/pages/login']);
    // }

    let isAuth = this.accountService.isAdmin();
    
    if (isAuth) {
      return true;
    }
    
    return false;
  }
  
}
