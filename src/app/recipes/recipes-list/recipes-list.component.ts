import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecepiListService } from './recepi-list.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: [RecepiListService]
})
export class RecipesListComponent implements OnInit {
  addedRecipiTemsArray: Array<{ name: string, description: string }> = [];
  @Output() recipiWasSelected = new EventEmitter<IRecipe>();
  public newRecipesData: IRecipe[]
  // @Input('rcvdInputRecipeItems') recipeElement: { name: string, description: string };
  //  public recipes: Recipe[] = [
  //    new Recipe('Test Recipe', 'Welcome to treat fest', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
  //    new Recipe('Test Recipe', 'Welcome to treat fest', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')
  //  ]
  // public recipes: IRecipe[] = [
  //   { name: 'Test Recipe1', description: 'Welcome to treat fest1', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' },
  //   { name: 'Test Recipe2', description: 'Welcome to treat fest2', imagePath: 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg' }
  // ];
  constructor(private rcepiSericeItem: RecepiListService) {

  }

  ngOnInit() {
    this.newRecipesData = this.rcepiSericeItem.recipes
  }
  recvdCreatedRecipeItems(elemData: { name: string, description: string }) {
    this.addedRecipiTemsArray.push(elemData);
  }
  recevdSelectedRecipiItems(recepitem: IRecipe) {

    this.recipiWasSelected.emit(recepitem);
  }
}
