import { Component, OnInit } from '@angular/core';
import { Item, items } from '../item';
import { ItemsService } from '../items.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ItemsService],
})
export class ShoppingListComponent implements OnInit {
  items: Item[] = [];
  dateOfShopping: Date = new Date();
  // new_item: string = '';
  el_clicked: number = -1;

  constructor(private itemService: ItemsService) {
    itemService.getItemsAsync().subscribe((items) => (this.items = items));
  }

  ngOnInit(): void {
    // this.items = items;
    this.dateOfShopping = new Date();
  }

  add(new_item: string): void {
    this.items.push(new Item(new_item));
    // this.new_item = '';
  }

  doClick(i: number): void {
    this.el_clicked = i;
    console.log('do click', i);
  }

  finishEdit(el2edit: Item): void {
    this.items[this.el_clicked] = el2edit;
    this.el_clicked = -1;
  }

  formatDate(): string {
    let ret = '';
    return this.dateOfShopping.toISOString().slice(0, 10);
  }

  calculateValue(): number {
    let value = 0;
    for (let item of this.items) {
      value += item.price;
    }
    return value;
  }
}
