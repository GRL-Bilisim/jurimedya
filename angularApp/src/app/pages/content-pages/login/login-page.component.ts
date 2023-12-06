import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'app/user/account.service';
import { User } from 'app/user/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  kullanicilar: any[];
  SERVER_URL: string;
  kayitlikullanici: string = '';
  kayitlisifre: string = '';

  loginFormSubmitted = false;
  isLoginFailed = false;

  user: any;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });
  SERVER_URLS: string;
  mainBox: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService, private httpClient: HttpClient,
    private route: ActivatedRoute, private accountService: AccountService) {
  }

  get lf() {
    return this.loginForm.controls;
  }

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  sunucuayarla() {
  }

  ngOnInit() {
    if (localStorage.getItem("kayitlikullanici") !== null && localStorage.getItem("kayitlisifre") !== null) {

      this.kayitlikullanici = localStorage.getItem("kayitlikullanici");
      this.kayitlisifre = localStorage.getItem("kayitlisifre");
    }
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    localStorage.setItem('url', localStorage.getItem('urlx') + "maratonservices/");
    const formData = new FormData();

    formData.append('username', this.loginForm.get('username').value);
    formData.append('password', this.loginForm.get('password').value);

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicigirisi&username=" + this.loginForm.get('username').value + "&password=" + this.loginForm.get('password').value;

    this.httpClient.get<any>(this.SERVER_URL).subscribe({

    // this.accountService.loginUser(formData).subscribe({
      next: (data: User) => {
        debugger

        if (data[0]) this.user = data[0];
        else this.user = null;

        
        if (this.user != null) {
          localStorage.setItem('username', this.user.username);
          localStorage.setItem('password', this.loginForm.get('password').value);
          
          localStorage.setItem('userid', "" + this.user.user_indeks);
          localStorage.setItem('adi', this.user.adi);
          localStorage.setItem('resim', this.user.profilresim);
          localStorage.setItem('unvani', this.user.unvani);
          localStorage.setItem('dashboard', this.user.tanimlidashboard);
          localStorage.setItem('ismerkezi', this.user.ismerkezi);
          localStorage.setItem('isistasyno', this.user.isistasyonu);
          localStorage.setItem('eposta', this.user.eposta);
          localStorage.setItem('telefon', this.user.telefon);
          localStorage.setItem('profilresim', this.user.profilresim);
          localStorage.setItem('dashboard', this.user.dashboard);
          localStorage.setItem('logourl', this.user.logourl);
          localStorage.setItem('mobillogourl', this.user.mobillogourl);
          localStorage.setItem('firmaadi', this.user.yurtadi);

          if (this.loginForm.get('rememberMe').value == true) {
            var logToken = this.getRandomString(12);
            localStorage.setItem('logintoken', logToken);
            localStorage.setItem('kayitlikullanici', this.loginForm.get('username').value);
            localStorage.setItem('kayitlisifre', this.loginForm.get('password').value);
          } else {
            localStorage.setItem('logintoken', '');
            localStorage.setItem('kayitlikullanici', '');
            localStorage.setItem('kayitlisifre', '');
          }

          debugger
          if (this.user.dashboard == 'Manager') {
            this.SERVER_URLS = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicimenusu&userid=" + this.user.user_indeks;

            this.httpClient.get<any>(this.SERVER_URLS).subscribe(data => {

              localStorage.setItem('kullanicimenusu', JSON.stringify(data));
              this.spinner.hide();
              this.router.navigate(['/dashboard/dashboard1']);

            });

          } else {
            this.router.navigate(['/user-pages'])
          }
        }
        else {
          debugger
          this.isLoginFailed = true;
          this.spinner.hide();
          this.cdr.markForCheck();
          console.log('Giriş Başarısız');
        }
      },
      error: error => {
        debugger
        // this.isLoginFailed = true;
        // this.spinner.hide();
        // this.cdr.markForCheck();
        // console.log('Giriş Başarısız');
      },
      complete: () => {
        debugger
        if (this.user != null) this.accountService.setCurrentUser(this.user);
      }
    });

    // this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
    //   .then((res) => {

    //   })
    //   .catch((err) => {

    //   }
    //   );
  }

}
