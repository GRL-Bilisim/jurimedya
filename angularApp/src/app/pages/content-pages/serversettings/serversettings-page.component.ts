import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import swal from 'sweetalert2';
@Component({
    selector: 'app-serversettings-page',
    templateUrl: './serversettings-page.component.html',
    styleUrls: ['./serversettings-page.component.scss']
})

export class ServerSettingsPageComponent implements OnInit {
    @ViewChild('f') forogtPasswordForm: NgForm;
    kayitlisunucu:string='';
    sunucuadresi:string='';

    constructor(private router: Router,
        private route: ActivatedRoute) { 

            
        }

    // On submit click, reset form fields
    onSubmit() {
        localStorage.setItem('urlx',this.sunucuadresi);

        swal.fire({
            icon: "success",
            title: 'Sunucu adresi başarıyla '+this.sunucuadresi+' olarak güncellendi!',
            text: 'Sunucu adresi değişti',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });


    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

    ngOnInit() {
        this.kayitlisunucu=localStorage.getItem('urlx');
        this.sunucuadresi=localStorage.getItem('urlx');
    }
}
