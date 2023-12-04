import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit, ChangeDetectorRef, Inject, Renderer2, ViewChild, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { DOCUMENT } from '@angular/common';
import { CustomizerService } from '../services/customizer.service';
import { FormControl } from '@angular/forms';
import { LISTITEMS } from '../data/template-search';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLang = "en";
  selectedLanguageText = "English";
  selectedLanguageFlag = "./assets/img/flags/us.png";
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  logoUrl = 'assets/img/logo.png';
  menuPosition = 'Side';
  isSmallScreen = false;
  protected innerWidth: any;
  searchOpenClass = "";
  transparentBGClass = "";
  hideSidebar: boolean = true;
  avatar:any="";
  gercekadi:any="";
  unvani:any="";
  public isCollapsed = true;
  layoutSub: Subscription;
  configSub: Subscription;

  @ViewChild('search') searchElement: ElementRef;
  @ViewChildren('searchResults') searchResults: QueryList<any>;

  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  @Output()
  seachTextEmpty = new EventEmitter<boolean>();

  listItems = [];
  control = new FormControl();

  public config: any = {};
  url: any;
  userid:any=localStorage.getItem('userid');
  
 
  public usersMessages: any;
  public  messagesCout=0;
  uri: string;

  constructor(public translate: TranslateService,
    private layoutService: LayoutService,
    private router: Router,
    private location: Location,
    private modalService: NgbModal,
    private configService: ConfigService, private cdr: ChangeDetectorRef
    ,private http:HttpClient) {

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;

    this.layoutSub = layoutService.toggleSidebar$.subscribe(
      isShow => {
        this.hideSidebar = !isShow;
      });


 
      this.getMessagesForUer();


  }

  ngOnInit() {


   

    
    const datas =localStorage.getItem('url') +"angular/dataservis.php?page_id=dbtablolar&userid="+localStorage.getItem("userid");

    this.http.get<any>(datas).subscribe(data =>{

      this.listItems=data;

    });

this.gercekadi=localStorage.getItem('adi');
this.unvani=localStorage.getItem('unvani');
this.avatar=localStorage.getItem('profilresim');


    if (this.innerWidth < 1200) {
      this.isSmallScreen = true;
    }
    else {
      this.isSmallScreen = false;
    }


  }

  ngAfterViewInit() {

    this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();

    })
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth < 1200) {
      this.isSmallScreen = true;
    }
    else {
      this.isSmallScreen = false;
    }
  }


  logout(){

    localStorage.clear();
    sessionStorage.clear();
this.router.navigate(["/pages/login"]);

  }
  loadLayout() {

    if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
      this.menuPosition = this.config.layout.menuPosition;
    }

    if (this.config.layout.variant === "Light") {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }

    if (this.config.layout.variant === "Transparent") {
      this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
    }
    else {
      this.transparentBGClass = "";
    }

  }

  onSearchKey(event: any) {
    if (this.searchResults && this.searchResults.length > 0) {
      this.searchResults.first.host.nativeElement.classList.add('first-active-item');
    }

    if (event.target.value === "") {
      this.seachTextEmpty.emit(true);
    }
    else {
      this.seachTextEmpty.emit(false);
    }
  }

  removeActiveClass() {
    if (this.searchResults && this.searchResults.length > 0) {
      this.searchResults.first.host.nativeElement.classList.remove('first-active-item');
    }
  }

  onEscEvent() {
    this.control.setValue("");
    this.searchOpenClass = '';
    this.seachTextEmpty.emit(true);
  }

  onEnter() {
    if (this.searchResults && this.searchResults.length > 0) {
      let url = this.searchResults.first.url;
      if (url && url != '') {
        this.control.setValue("");
        this.searchOpenClass = '';
        this.router.navigate([url]);
        this.seachTextEmpty.emit(true);
      }
    }
  }
  back(){
    this.location.back(); // <-- go back to previous location on cancel
}
  redirectTo(value) {

    this.router.navigate([value]);

    this.seachTextEmpty.emit(true);
  }
  redirectToChat(id,indexM){
    this.url=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_okunducevir&recordid="+indexM;
    this.http.get<any>(this.url).subscribe(data=>{});

    this.uri="/chat/"+id;
    

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([this.uri]));
 }
  ChangeLanguage(language: string) {
    this.translate.use(language);

    if (language === 'en') {
      this.selectedLanguageText = "English";
      this.selectedLanguageFlag = "./assets/img/flags/us.png";
    }
    else if (language === 'es') {
      this.selectedLanguageText = "Spanish";
      this.selectedLanguageFlag = "./assets/img/flags/es.png";
    }
    else if (language === 'pt') {
      this.selectedLanguageText = "Portuguese";
      this.selectedLanguageFlag = "./assets/img/flags/pt.png";
    }
    else if (language === 'de') {
      this.selectedLanguageText = "German";
      this.selectedLanguageFlag = "./assets/img/flags/de.png";
    }
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }

  toggleSearchOpenClass(display) {
    this.control.setValue("");
    if (display) {
      this.searchOpenClass = 'open';
      setTimeout(() => {
        this.searchElement.nativeElement.focus();
      }, 0);
    }
    else {
      this.searchOpenClass = '';
    }
    this.seachTextEmpty.emit(true);



  }

  setMessagesRead(){
    
    this.url=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_tumunuokunduyap&userid="+this.userid;

  this.http.get<any>(this.url).subscribe(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '<h6>Bütün mesajlarınız okundu olarak işaretlendi</h6>',
      showConfirmButton: false,
      timer: 1500
    });
  });
  }

getMessagesForUer(){

  this.url=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_gelenmesajlarimicek&userid="+this.userid;

  this.http.get<any>(this.url).subscribe(data => {
    this.usersMessages=data;
   this.messagesCout=data.length;

   console.log(data);
  });

  console.log(this.messagesCout);
  

}





  toggleNotificationSidebar() {
    this.layoutService.toggleNotificationSidebar(true);
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
  }

  istakipGit(){
    this.router.navigate(['/taskboard']);
  }

 


  hizlistoktanimla(){
  
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue:'', rowformid:'826', rowrecordid: '', formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {

      }

    }, (reason) => {
    });



  }

}
