import { Component, OnInit } from '@angular/core';
import {
  trigger, state, style,
  transition,
  animate
} from "@angular/animations";
import { animationConfig } from '../shared/services/animation-service';
@Component({
  selector: 'app-animation-view',
  templateUrl: './animation-view.component.html',
  styleUrls: ['./animation-view.component.css'],
  animations:[animationConfig]
  // animations: [
  //   trigger('myAwesomeAnimation', [
  //     state('small', style({
  //       transform: 'scale(1)',
  //     })),
  //     state('large', style({
  //       transform: 'scale(1.2)',
  //     })),
  //     transition('small <=> large', animate('5000ms ease-in')),
  //   ]),
  // ]

})
export class AnimationViewComponent implements OnInit {

  state: string = "small";

  constructor() { }

  ngOnInit() {
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small')
  }
}
