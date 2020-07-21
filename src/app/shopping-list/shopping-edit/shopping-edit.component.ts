import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  itemDescription: string;
  itemName: string;
  itemAmount:number
  @Output() createRecipiItems = new EventEmitter<{ name: string, description:string, amount: number }>();
  constructor() { }

  ngOnInit() {
  }
  getShoppingEditRecipiData() {
    this.createRecipiItems.emit({ name: this.itemName, description:this.itemDescription, amount: this.itemAmount });
    this.itemName = "";
    this.itemDescription = "";
    this.itemAmount = null;
  }
}
