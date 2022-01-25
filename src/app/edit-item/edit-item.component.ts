import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() el2edit!:Item;
  @Output() doEditInParent: EventEmitter<Item>=new EventEmitter();
  edited!:Item;

  constructor() { }

  ngOnInit(): void {
    this.edited=new Item(this.el2edit.name,this.el2edit.price);
  }

  doEdit(){
    this.doEditInParent.emit(this.el2edit);
  }

  verifyData(form:object):void{
      console.log("is form data ok?",form,this.edited);
      this.doEditInParent.emit(this.edited);
  }

}
