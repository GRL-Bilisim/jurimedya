import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-oyuncular',
  templateUrl: './oyuncular.component.html',
  styleUrls: ['./oyuncular.component.scss']
})
export class OyuncularComponent implements OnInit {
  actors: any[];

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.userService.getActors().subscribe({
      next: (data: any[]) => {
        this.actors = data.filter(x => x.kapakresmi !== '').splice(0, 50);
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.cdr.detectChanges();
      }
    });
  }

}
// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-oyuncular',
//   templateUrl: './oyuncular.component.html',
//   styleUrls: ['./oyuncular.component.scss']
// })
// export class OyuncularComponent implements OnInit {
//   role: string = 'Başrol Kadın';
//   characterType: string = 'İyi';

//   actors: any[];

//   constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }

//   ngOnInit(): void {
//     this.getActors();
//   }

//   getActors() {
//     this.userService.getActors(this.role, this.characterType).subscribe({
//       next: (data: any[]) => {
//         debugger
//         this.actors = data.filter(x => x.kapakresmi !== '').splice(0, 50);
//         console.log(data);
//       },
//       error: error => {
//         debugger
//         console.log(error);
//       },
//       complete: () => {
//         this.cdr.detectChanges();
//       }
//     });
//   }

//   setRole(role: string, characterType: string) {
//     debugger
//     this.role = role;
//     this.characterType = characterType;
//     this.getActors();
//   }

// }
