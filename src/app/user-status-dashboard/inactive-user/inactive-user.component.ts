import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() inputInactiveUsers: string[];
  @Output() getInactiveUserId = new EventEmitter<{ id: number }>();
  constructor() { }

  ngOnInit() {
  }
  isStatusInactive(statusId: number) {
  
    this.getInactiveUserId.emit({ id: statusId })
  }
}
