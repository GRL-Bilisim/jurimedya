import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-diziler',
  templateUrl: './diziler.component.html',
  styleUrls: ['./diziler.component.scss']
})
export class DizilerComponent implements OnInit {
  serieses: any[];
  seriesesEpisodes: any[];
  dataloaded: boolean = false;
  category: string = 'Drama';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getSerieses();   
  }

  getSerieses() {
    this.userService.getSerieses(this.category).subscribe({
      next: (data: any[]) => {
        this.serieses = data.filter(x => x.durumu.toLowerCase() == 'yayında').splice(0, 12);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.getSeriesesEpisodes();
      }}
    );
  }

  getSeriesesEpisodes() {
    this.userService.getSeriesesEpisodes().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.seriesesEpisodes = data;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.serieses?.forEach(series => {
          series.episodes = this.seriesesEpisodes.filter(x => x.diziadi == series.diziadi)
          .map(x => {x.bolumno = +x.bolumno.substring(0, x.bolumno.length - 6); return x})
          .sort((a, b) => b.bolumno - a.bolumno);
        });
            
        console.log(this.serieses);
        this.dataloaded = true;
      }
    });
  }
}
