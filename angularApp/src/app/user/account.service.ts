import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/user/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.apiUrl;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.url + 'angular/userDataService.php?page_id=registerUser', user);
  }

  // To check all the below methods
  loginUser(formData: any) : Observable<User> {
    return this.http.get<User>(this.url + 'angular/userDataService.php?page_id=login&username=' + formData.get('username') + '&password=' + formData.get('password'));
  }

  logoutUser() {
    localStorage.removeItem('token');
  }

  editAccount(user: any) {
    return this.http.post(this.url + 'editaccount', user);
  }

  setUser(user: any) {
    this.user = user;
  }

  isAdmin() : boolean {
    // return this.user?.dashboard === 'Manager';
    return true
  }

}
