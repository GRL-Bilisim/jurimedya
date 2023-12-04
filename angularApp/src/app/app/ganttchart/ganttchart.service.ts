import { Injectable } from '@angular/core';
import { Task } from './ganttchart.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class ganttchartService {

  constructor() { }

  public tasks: Task[] = [
    new Task( 
      1,
      1,
      'D'
      
      )
    
  ];


  addNewTask(title: string, message: string, type: string) {

  

    let task: Task = {
      id:1,
      UserID: Math.round(Math.random() * 10000000000),
      istasyon:'D',
  
    }
    this.tasks.unshift(task);
    return of(this.tasks.slice()).pipe(delay(100));

  }

}
