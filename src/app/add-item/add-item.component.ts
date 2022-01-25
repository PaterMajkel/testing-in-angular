import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

type FormData = {
  itemName: string;
};

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output() addItemInParent: EventEmitter<string> = new EventEmitter();
  new_item: string = '';

  constructor() {}

  ngOnInit(): void {}

  add(item_name: string): void {
    const new_item = item_name;
    this.addItemInParent.emit(new_item);
  }

  //   verifyData(form:object):void{
  //     console.log("is form data ok?",Object.values(form));
  //     const val=Object.values(form);
  //     console.log(val[0]);
  //    this.add(val.toString());
  // }

  verifyData(form: FormData): void {
    console.log('is form data ok?', form);
    this.add(form['itemName']);
    this.new_item = '';
  }

  // verifyData(form:NgForm):void{
  //   console.log("is form data ok?",form);
  //   this.add(form["itemName"]);
  //   form.resetForm();
  // }
}
