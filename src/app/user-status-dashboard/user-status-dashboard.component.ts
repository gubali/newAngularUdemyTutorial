import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-status-dashboard',
  templateUrl: './user-status-dashboard.component.html',
  styleUrls: ['./user-status-dashboard.component.css']
})
export class UserStatusDashboardComponent implements OnInit {

  public activeUsers = ["Max", "helen"];
  public inactiveUsers = ["Marry", "adam", "Jacbob"];

  constructor() { }

  ngOnInit() {
  }
  recvdActiveUsrId(id:number){
 this.inactiveUsers.push(this.activeUsers[id]);
 this.activeUsers.splice(id, 1);
  }
}
