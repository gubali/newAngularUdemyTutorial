import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() newNumber = new EventEmitter<number>();
  timer;
  count = 0;
  constructor() { }

  ngOnInit() {
  }
  onStart() {
    this.timer = setInterval(() => {
      this.newNumber.emit(this.count + 1);
      this.count++
    }, 1000)
  }
  onStop() {
    clearInterval(this.timer)
  }
}
