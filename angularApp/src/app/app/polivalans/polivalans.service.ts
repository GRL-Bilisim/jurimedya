import { Injectable } from '@angular/core';
import { Task } from './polivalans.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class polivalansService {

  constructor() { }

  public tasks: Task[] = [
    new Task(
      1,
      'Responsive',
      'primary',
      'C',
      'V'
           )

  ];



}
