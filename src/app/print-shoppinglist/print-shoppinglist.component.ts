import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-print-shoppinglist',
  templateUrl: './print-shoppinglist.component.html',
  styleUrls: ['./print-shoppinglist.component.css'],
})
export class PrintShoppingListComponent implements OnInit {
  @Input() dateOfShopping!: string;
  @Input() items!: Item[];
  @Input() title!: string;
  @Output() doClickInParent: EventEmitter<number> = new EventEmitter();
  el_hover: number = -1;
  color = 'red';

  constructor() {}

  ngOnInit() {
    console.log(this.items);
  }

  doHover(i: number): void {
    this.el_hover = i;
  }

  doClick(i: number): void {
    console.log('do click', i);
    this.doClickInParent.emit(i);
  }
}
