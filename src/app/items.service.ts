import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Item } from './item';

@Injectable()
export class ItemsService {
  constructor() {}

  getItems(): Item[] {
    return [new Item('milk'), new Item('orange'), new Item('onion')];
  }

  getItemsAsync(): Observable<Item[]> {
    return of([new Item('milk'), new Item('orange'), new Item('onion')]);
  }
}
