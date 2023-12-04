import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dizi-detaylari',
  templateUrl: './dizi-detaylari.component.html',
  styleUrls: ['./dizi-detaylari.component.scss']
})
export class DiziDetaylariComponent implements OnInit {
  series: any;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getSeriesById(this.route.snapshot.params.id);
  }

  getSeriesById(id: number) {
    this.userService.getSeriesById(id).subscribe((data: any) => {
      console.log(data);
      this.series = data;
    });
  }

}
