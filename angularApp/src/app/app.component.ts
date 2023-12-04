import { Component, ViewContainerRef, OnInit, OnDestroy, SimpleChanges,ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import {formatDate} from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SessionTimerService } from 'session-expiration-alert';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    alertAt = 15;
    startTimer = true;
    subscription: Subscription;
    bildirimInterval: any;
    cities_psh: any[];
    degerleri: string;
    etiketleri: string;
    mlzemeInterval: NodeJS.Timeout;
    sonkontrolzamani:string;

    constructor(private httpClient: HttpClient,public toastr: ToastrService,private router: Router) {
 


        // this.router.events.subscribe((e) => {
        //     if (e instanceof NavigationEnd) {
        //         if(localStorage.getItem("userid")!=null){
        //             this.bildirimInterval =   setInterval(()=>{
        //                 var bildirimurl=localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_islembildirimlerim&turu=ilk&userid="+localStorage.getItem("userid");
        
        //                 this.httpClient.get<any>(bildirimurl).subscribe(data => {
        //                         if(data.length>0){
        //                             for (let i = 0; i <= data.length; i++) {                                             
        //                                 if(i==data.length){
        //                                     clearInterval(this.bildirimInterval);
                                            
        //                                 }else{
        //                                     if(data[i].bildirimturu=='Bilgi'){
        //                                         this.TypeInfo(data[i].bildirimmetni,data[i].olusturmatarihi+' '+data[i].olusturmasaati,data[i].index_bildirimler);
        //                                     }
        //                                     if(data[i].bildirimturu=='Uyari'){
        //                                         this.TypeWarning(data[i].bildirimmetni,data[i].olusturmatarihi+' '+data[i].olusturmasaati,data[i].index_bildirimler);
        //                                     }
        //                                 }              
        //                             }                           
        //                         }
        //                         else{             
        //                             clearInterval(this.bildirimInterval);
        //                             }
        //                 });
        
        //             },2000);    
        //         }else{

        //         }

 
        //     }
        //   });

      var  currentDate = new Date();

const cValue = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');

    
    }
    increase() {
        this.alertAt++;
      }
    ngOnInit() {

      localStorage.setItem('urlx',"https://www.jurimedya.com/");


      if (localStorage.getItem("kayitlikullanici") !== null&&localStorage.getItem("kayitlisifre") !== null) {

      }

        if (localStorage.getItem("userid") === null) {
            this.router.navigate(['']);
        }
                this.subscription = this.router.events
                .pipe(
                    filter(event => event instanceof NavigationEnd)
                )
                .subscribe(() => window.scrollTo(0, 0));
      

      
    }



   
  // Info Type
  TypeInfo(message,header,id) {
    this.toastr.info(message,header,{"timeOut": 0, "extendedTimeOut": 0 }).onTap.subscribe(()=>{
        var bildirimokundu = localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_bildirimiokundu&bildirimid="+id;
        this.httpClient.get<any>(bildirimokundu).subscribe(data => {

        });
    });
  }

  // Warning Type
  TypeWarning(message,header,id) {
    this.toastr.warning(message,header,{"timeOut": 0 , "extendedTimeOut": 0}).onTap.subscribe(()=>{
        
                                   
    });

  }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }



}

