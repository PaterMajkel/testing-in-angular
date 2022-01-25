import { Injectable } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';

@Injectable()
export class NumbersService {
  otherRandomNumbers = from([1, 3, 5, 7]);

  constructor() {}

  getNumber():Observable<number>{
    return from ([8,9,10,11]);
  }
}
