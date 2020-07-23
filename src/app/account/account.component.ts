import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() rcvdInputDataOfCreateAccount: { accountName: string, accountType: string };
  constructor() { }

  ngOnInit() {
    console.log('ngOninit', this.rcvdInputDataOfCreateAccount);
  }
  accountStatus(status: string) {
    if (status === 'Inactive') {
      return 'label-danger';
    } else if (status === 'Active') {
      return 'label-success';
    } else {
      return 'label-primary';
    }
  }
}
