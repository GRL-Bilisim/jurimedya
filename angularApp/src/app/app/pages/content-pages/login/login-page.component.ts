import { Component,ChangeDetectorRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

   kullanicilar :any[];
  SERVER_URL :string;


  loginFormSubmitted = false;
  isLoginFailed = false;
  kayitlikullanici: string;
  kayitlisifre: string;
  currentApplicationVersion = environment.appVersion;

  users:any[];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });
  SERVER_URLS: string;
  mainBox: any;
  logToken: string;
  ipAddress: string;


  constructor(private cdr: ChangeDetectorRef,private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService, private httpClient: HttpClient,
    private route: ActivatedRoute) {
  }

  get lf() {
    return this.loginForm.controls;
  }


  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
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



      localStorage.setItem('url',  "https://www.jurimedya.com/maratonerpservices/");

      const formData = new FormData();
      formData.append('username', this.loginForm.get('username').value);
  
      formData.append('password', this.loginForm.get('password').value);
      this.logToken =  this.getRandomString(12);

this.SERVER_URL=localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_kullanicigirisi&username="+this.loginForm.get('username').value+"&password="+this.loginForm.get('password').value;


    this.httpClient.get<any>(this.SERVER_URL).subscribe(data => {


        this.users = data;


 

        if (this.users.length>0)
        {

          for(var i=0;i<this.users.length;i++)
          {


 
            localStorage.setItem('userid', this.users[i].user_indeks);
            localStorage.setItem('username', this.users[i].username);
            localStorage.setItem('adi', this.users[i].adi);
            localStorage.setItem('resim', this.users[i].profilresim);
            localStorage.setItem('unvani', this.users[i].unvani);
            localStorage.setItem('dashboard', this.users[i].tanimlidashboard);
            localStorage.setItem('ismerkezi', this.users[i].ismerkezi);
            localStorage.setItem('isistasyno', this.users[i].isistasyonu);
            localStorage.setItem('eposta', this.users[i].eposta);
            localStorage.setItem('telefon', this.users[i].telefon);
            localStorage.setItem('profilresim', this.users[i].profilresim);


            var personelc = localStorage.getItem('url')+"angular/dataservis.php?page_id=personelozlukne&userid="+this.users[i].adi;
            this.httpClient.get<any>(personelc).subscribe(data => {
              localStorage.setItem('personelozlukid',data[0].pid);

            });

         

            this.SERVER_URLS=localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_kullanicimenusu&userid="+this.users[i].user_indeks;

            this.httpClient.get<any>(this.SERVER_URLS).subscribe(data => {
  
              localStorage.setItem('kullanicimenusu', JSON.stringify(data));
              this.spinner.hide();
              this.router.navigate(['/dashboard/dashboard1']);
  
              if(this.loginForm.get('rememberMe').value==true){

                var logToken =  this.getRandomString(12);
                localStorage.setItem('logintoken',logToken);
                sessionStorage.setItem('logintoken',logToken);
                localStorage.setItem('kayitli_kullanici',  this.loginForm.get('username').value);
                localStorage.setItem('kayitli_sifre',  this.loginForm.get('password').value);

              }else{

                localStorage.setItem('logintoken','');
                localStorage.setItem('kayitli_kullanici',  '');
                localStorage.setItem('kayitli_sifre',  '');

              }
              

            });
           

         
      
          }

        
        }
        else
        {
          this.isLoginFailed = true;
          this.spinner.hide();
          this.cdr.markForCheck();
          console.log('Giriş Başarısız');
        }
      
    })     
      
     

    
      




    this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
      .then((res) => {
   
      })
      .catch((err) => {
       
      }
      );
  }
  ngOnInit() {

    this.httpClient.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('th data', data);
      this.ipAddress = data.ip
     
    })
  
if (localStorage.getItem('kayitli_kullanici')!=='' && localStorage.getItem('undefined')!=='')
{

  
 this.kayitlikullanici=localStorage.getItem('kayitli_kullanici');
 this.kayitlisifre=localStorage.getItem('kayitli_sifre');
 this.cdr.markForCheck;

}
  }
}
