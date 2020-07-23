import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: IRecipe;
  constructor() { }

  ngOnInit() {

  }
  // rcvdSelectedRecipi(elem) {
  //   debugger;
  //   this.selectedRecipi.push(elem);
  // }
}
