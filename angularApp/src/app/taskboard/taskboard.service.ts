import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class TaskBoardService {

  constructor() { }

  public tasks: Task[] = [

 
  
  ];


  addNewTask(title: string, message: string, type: string) {

    let badgeClass = 'primary';

    if(type === 'Marketing') {
      badgeClass = 'primary'
    }
    else if(type === 'UI-Designing') {
      badgeClass = 'warning'
    }
    else if(type === 'Developing') {
      badgeClass = 'success'
    }
    else if(type === 'Management') {
      badgeClass = 'info'
    }


    let task: Task = {
      taskId: Math.round(Math.random() * 10000000000),
      taskTitle: title,
      taskMessage: message,
      createdOn: 'Nov 12',
      createdBy: 'Elizabeth Elliott',
      assignedTo: ['assets/img/portrait/small/avatar-s-4.png'],
      status: type,
      badgeClass: badgeClass,
      messageType: 'text',
      messageCount: '',
      linkCount: '',
      belge: '',
      belge2: '',
      belge3: '',
      isUserImg: true,
    }
    this.tasks.unshift(task);
    return of(this.tasks.slice()).pipe(delay(100));

  }

}
