import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() addedRecipeItems: IRecipe;
  @Output() emitSelectedRecipiItems = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  getSelectedRecipeItems(): void {
    this.emitSelectedRecipiItems.emit();
  }
}
