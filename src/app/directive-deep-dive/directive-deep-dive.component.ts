import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-deep-dive',
  templateUrl: './directive-deep-dive.component.html',
  styleUrls: ['./directive-deep-dive.component.css']
})
export class DirectiveDeepDiveComponent implements OnInit {
  public even = [2, 4];
  public odd = [1, 3, 5];
  public toggleButton = true;
  value  = 10;
  constructor() { }

  ngOnInit() {
  }

}
