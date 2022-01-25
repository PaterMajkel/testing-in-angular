import { Component } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';
import { NumbersService } from './numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NumbersService]
})
export class AppComponent {
  name = 'Shopping lists';

  randomNumbers = new Observable((observer: Observer<number>) => {
    observer.next(Math.floor(Math.random() * (10 + 1)));
    observer.next(Math.floor(Math.random() * (10 + 1)));
    observer.next(Math.floor(Math.random() * (10 + 1)));
    observer.complete();
    return {
      unsubscribe() {
        console.log('Unsubscribed');
      },
    };
  });

  constructor(otherService: NumbersService) {
    const numbers = this.randomNumbers.subscribe({
      next(msg: number) {
        console.log('number: ', msg);
      },
      complete() {
        console.log('Finished sequence');
      },
    });

    const other_numbers = otherService.getNumber().subscribe({
      next(msg: number) {
        console.log('other number from service: ', msg);
      },
      complete() {
        console.log('Finished sequence');
      },
    });
  }
}
