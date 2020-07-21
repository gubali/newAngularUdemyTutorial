import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() addedRecipeItems: { name: string, description: string };
  @Output() emitSelectedRecipiItems = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  getSelectedRecipeItems(): void {
    this.emitSelectedRecipiItems.emit();
  }
}
