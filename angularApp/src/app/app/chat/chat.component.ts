import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Renderer2, Inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat, UsersChat } from './chat.model';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from 'app/shared/services/config.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  chats: Chat[] = [];
  cet: any = [];
  activeChat: UsersChat;
  usersChat: UsersChat[] = [];
  activeChatUser: string;
  activeChatUserImg: string;
  loggedInUserImg: string;
  newMessage = "";
  searchQuery: string = '';
  placement = "bottom-right";
  isContentOverlay = false;
  userid: any = localStorage.getItem('userid');

  public config: any = {};
  layoutSub: Subscription;

  public urlid = this.route.snapshot.paramMap.get('id');
  messages = new Array();
  item: number = 0;
  users: string;
  dataV: any;
  aliciid: any;
  mesajcek: string;
  leftChat: boolean = false;
  activeChatSenderUserImg: string;
  viewInterval:any;
  dataCount: any;
  constructor(private http: HttpClient, private elRef: ElementRef, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private configService: ConfigService, private cdr: ChangeDetectorRef,
    private chatService: ChatService, private route: ActivatedRoute) {



    this.users = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_kullanicilarigetir&userindeks=" + this.userid;

    this.http.get<any>(this.users).subscribe(data => {
      this.usersChat = data;

      if (this.urlid != null) {
        var filterData = data.filter(a => a.user_indeks == this.urlid);
        this.viewChat(filterData, this.urlid);
        this.activeChatUser = filterData[0].adi;
        this.activeChatUserImg = filterData[0].profilresim;


      }


    });


    this.config = this.configService.templateConf;
    this.activeChat = chatService.usersChat.find(_ => _.isActiveChat);
    this.activeChatUser = this.activeChat.name;
    this.activeChatUserImg = this.activeChat.avatar;
    this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png"
    this.renderer.addClass(this.document.body, "chat-application");
    //this.usersChat.find(o => o.user_indeks === 10);

  }

  ngOnInit() {


    this.users = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_kullanicilarigetir&userindeks=" + this.userid;

    this.http.get<any>(this.users).subscribe(data => {
      this.usersChat = data;
      this.cdr.markForCheck();





    });


  }

  ngOnDestroy() {
clearInterval(this.viewInterval);
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }

    this.renderer.removeClass(this.document.body, "chat-application");
  }




  //send button function calls
  onAddMessage() {
    if (this.newMessage != "") {

      console.log(this.aliciid);

      const postUrl = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajgonder";

      let postData = new FormData();

      postData.append('gonderenid', localStorage.getItem('userid'));
      postData.append('aliciid', this.aliciid);
      postData.append('mesaj', this.newMessage);

      this.http.post(postUrl, postData).subscribe(data => {
        this.mesajcek = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + this.aliciid + "&userid=" + localStorage.getItem('userid');

        this.http.get<any>(this.mesajcek).subscribe(data => {

          this.chats = data;

          this.cdr.markForCheck();


        });

      },
        err => {
          console.log('Error: ' + err.error);
        });

      // this.activeChat.chats.push({
      //   isReceived: false,
      //   time: "",
      //   messages: [this.newMessage],
      //   messageType: 'text'
      // })
      this.newMessage = "";
    }
  }

  viewChat(chats, id) {



    this.usersChat.forEach(chat => {
      if (chats.user_indeks == chats.user_indeks) {

        if (id == "") {
          this.aliciid = chats.user_indeks;
        }

        else {
          this.aliciid = id;
        }

        chat.isActiveChat = false;


      }
    })
this.viewInterval = setInterval(()=>{
  this.mesajcek = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + this.aliciid + "&userid=" + localStorage.getItem('userid');
  this.http.get<any>(this.mesajcek).subscribe(data => {


    this.chats = data;
    this.cdr.markForCheck();
    this.urlid = null;

  });
 
},2000);
this.activeChat = chats;
this.activeChat.isActiveChat = true;
this.activeChatUser = chats.adi;
this.activeChatUserImg = chats.profilresim;
this.activeChatSenderUserImg = localStorage.getItem('profilresim');

this.isContentOverlay = false;
  }


  onSidebarToggle() {
    this.isContentOverlay = true;
  }

  onContentOverlay() {
    this.isContentOverlay = false;

  }

}
