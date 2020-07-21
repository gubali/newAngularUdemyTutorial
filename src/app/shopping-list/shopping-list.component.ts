import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor() { }

  ngOnInit() {
  }
  addedShoppingListItems(data: { name: string, description:string, amount: number }) {
  this.ingredients.push(data);
  
  }
}
