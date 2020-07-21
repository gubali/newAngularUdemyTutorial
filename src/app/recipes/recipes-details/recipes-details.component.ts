import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() selectedRecipiDetails: IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
