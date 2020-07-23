import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
@Input() inputInactiveUsers: string[]
  constructor() { }

  ngOnInit() {
  }

}
