import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/user/user';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.apiUrl;
  user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  $user: Observable<any> = this.user.asObservable();

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.url + 'angular/userDataService.php?page_id=registerUser', user);
  }

  // To check all the below methods
  loginUser(formData: any) : Observable<User> {
    return this.http.get<User>(this.url + 'angular/userDataService.php?page_id=login&username=' + formData.get('username') + '&password=' + formData.get('password'));
  }

  logoutUser() {
    debugger
    this.user.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('adi');
    localStorage.removeItem('password');
    console.log(this.$user);
    
  } 

  loadCurrentUser() {    
    return this.http.get(this.url + 'angular/dataservis.php?page_id=pdo_kullanicigirisi&username=' + localStorage.getItem('adi') + '&password=' + localStorage.getItem('password')).subscribe({
      next: (data: any) => {
        debugger
        if (data.length > 0) {
          this.setCurrentUser(data);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

  editAccount(user: any) {
    return this.http.post(this.url + 'editaccount', user);
  }

  setCurrentUser(user: any) {
    console.log(this.$user);
  
    this.user.next(user);
    console.log(this.$user);
  }

  isAdmin() : boolean {
    debugger
    return this.user?.getValue().dashboard === 'Manager';
  }

}
