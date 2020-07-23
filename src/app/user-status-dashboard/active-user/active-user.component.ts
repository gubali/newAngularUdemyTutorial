import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() inputActiveUsers: string[];
  @Output() getActiveUserId = new EventEmitter<{ id: number }>();
  constructor() { }

  ngOnInit() {
  }
  isStatusActive(statusId: number) {
    //const userStatusId = statusId + 1;
    this.getActiveUserId.emit({ id: statusId })
    console.log(this.inputActiveUsers)
  }
}
