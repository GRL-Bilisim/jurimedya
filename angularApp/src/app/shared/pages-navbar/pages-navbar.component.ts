import { Options } from '@angular-slider/ngx-slider';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/user/account.service';
import { User } from 'app/user/user';

@Component({
  selector: 'app-pages-navbar',
  templateUrl: './pages-navbar.component.html',
  styleUrls: ['./pages-navbar.component.scss']
})
export class PagesNavbarComponent implements OnInit {
  @ViewChild('filtersHeader') filtersHeader: ElementRef;
  @ViewChild('filtersMenu') filtersMenu: ElementRef;
  @ViewChild('mobileSidebar', { static: false }) mobileSidebar: NgbDropdown;
  @ViewChild('mobileSidebarMenu') mobileSidebarMenu: ElementRef;

  filtersHeaderShown: boolean = false;
  user: User = new User();
  userMenuActive: boolean = false;
  userFiltersMenuActive: boolean = false;
  value: number = 0;
  highValue: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  @HostListener('window:click', ['$event']) toggleFiltersHeader(e: any) {
    this.filtersHeaderShown = !this.filtersHeaderShown;
    if(this.filtersHeaderShown) {
      this.filtersHeader.nativeElement.classList.add('active');
    } else {
      this.filtersHeader.nativeElement.classList.remove('active');
    }
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = this.accountService.user;
  }

  toggleUserMenu(e: any) {    
    e.target.classList.toggle('active');
    this.userMenuActive = !this.userMenuActive;
  }

  toggleUserFiltersMenu(e: any) {    
    this.filtersMenu.nativeElement.style.width = e.view.innerWidth - 178 + 'px';
    this.filtersMenu.nativeElement.style.top = '100%';
    this.filtersMenu.nativeElement.style.marginTop = '90px';
    console.log(this.filtersMenu);
  }

  toggleBarsDropdownFromOutside(e: any) {
    this.mobileSidebarMenu.nativeElement.style.width = e.view.innerWidth - 15 + 'px';
    this.mobileSidebar.toggle();
  }

  logout() {
    // TODO: Implement logout
  }
}
