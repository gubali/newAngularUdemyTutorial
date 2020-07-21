import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  addedRecipiTemsArray: Array<{ name: string, description: string }> = [];
   @Output() recipiWasSelected = new EventEmitter();
  // @Input('rcvdInputRecipeItems') recipeElement: { name: string, description: string };
  //  public recipes: Recipe[] = [
  //    new Recipe('Test Recipe', 'Welcome to treat fest', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
  //    new Recipe('Test Recipe', 'Welcome to treat fest', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')
  //  ]
  public recipes: IRecipe[] = [
    { name: "Test Recipe1", description: 'Welcome to treat fest1', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' },
    { name: "Test Recipe2", description: 'Welcome to treat fest2', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' }
  ];
  constructor() { }

  ngOnInit() {
  }
  recvdCreatedRecipeItems(elemData: { name: string, description: string }) {
    this.addedRecipiTemsArray.push(elemData);
  }
  recevdSelectedRecipiItems(recepitem) {
   this.recipiWasSelected.emit(recepitem);
  }
}
