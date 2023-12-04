import { Component, OnInit, ElementRef, Renderer2, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit, OnDestroy {

  layoutSub: Subscription;
  isOpen = false;
  systemNoti: any;
  systemMess: any;
  uri: string;
  sysFavor: any;

  ngOnInit() {
  
  }

  constructor(public router:Router,private cdr :ChangeDetectorRef,private layoutService: LayoutService,public http:HttpClient) {

    this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(
      open => {
        this.isOpen = open;

        if(this.isOpen==true){
          var bildirimurl=localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_islembildirimlerim&turu=son&userid="+localStorage.getItem("userid");

          this.http.get<any>(bildirimurl).subscribe(data =>{
      
              this.systemNoti=data;
            this.cdr.markForCheck();
          });
      
  
          var mesajurl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_gelenmesajlarimicek&turu=son&userid="+localStorage.getItem("userid");
  
          this.http.get<any>(mesajurl).subscribe(data =>{
      
              this.systemMess=data;
            this.cdr.markForCheck();
          });
      
          var favourl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_favoriler&userid="+localStorage.getItem("userid");
  
          this.http.get<any>(favourl).subscribe(data =>{
      
              this.sysFavor=data;
            this.cdr.markForCheck();
          });
      
  
  
        }

      });
  }
  redirectToChat(id,indexM){

    this.uri="/chat/"+id;
    

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([this.uri]));
 }

 redirectToForm(path){

  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate([path]));
}
  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  favorilerdenCikar(id){
    var favourl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_favorilerdencikar&indexid="+id;
  
    this.http.get<any>(favourl).subscribe(data =>{
      if(data[0].status=='OK'){
        var favourl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_favoriler&userid="+localStorage.getItem("userid");
  
        this.http.get<any>(favourl).subscribe(data =>{
    
            this.sysFavor=data;
          this.cdr.markForCheck();
        });
      }
    });
  }

  temizle(){

this.systemNoti=[];
this.cdr.markForCheck();
  
}
temizleX(){
this.systemMess=[];
this.cdr.markForCheck();

}
  onClose() {
    this.layoutService.toggleNotificationSidebar(false);
  }

}
