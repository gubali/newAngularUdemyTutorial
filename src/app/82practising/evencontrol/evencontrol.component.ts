import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evencontrol',
  templateUrl: './evencontrol.component.html',
  styleUrls: ['./evencontrol.component.css']
})
export class EvencontrolComponent implements OnInit {
  @Input() evenNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
