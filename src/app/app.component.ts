import { Component, OnInit } from '@angular/core';
import { CommonDataServices } from './shared/services/common.dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public enableButton = false;
  public disableButton: boolean;
  public toggleAction = false;
  public log = [];
  public lengthItems: number;
  public evenNumbers: Array<number> = [];
  public oddNumbers: Array<number> = [];
  public headerNavigationName = 'recipes';
  // account creation
  public accountData: Array<{ accountName: string, accountType: string }> = [];
  public courceName = [{
    collegeName: 'NIET',
    courceName: 'B.Tech'
  },
  {
    collegeName: 'GNIET',
    courceName: 'M.Tech'
  },
  {
    collegeName: 'Accurate',
    courceName: 'MBA'
  }

  ];
  name = '';
  title = 'Welcome to Angular 10!';
  serverStatus: string;
  serverName = '';
  constructor(private commonDataService: CommonDataServices) {
    setTimeout(() => {
      this.enableButton = true;
    }, 2000);
  }

  ngOnInit(): void {
   this.accountData = this.commonDataService.accountData;
  }
  onClickEvent() {
    this.serverStatus = 'Server creasted successfully!';
  }
  getServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  resetTwoWayBinding() {
    this.name = '';
  }

  disableButtonIfEmptyString(): boolean {
    if (this.name === '' || this.name == null) {
      return true;
    } else {
      return false;
    }
  }
  getColorTextBaseOnTheCource(data) {
    if (data.courceName === 'B.Tech') {
      return 'text-primary';
    } else if (data.courceName === 'M.Tech') {
      return 'text-success';
    } else {
      return 'text-danger';
    }
  }

  toggleFunciton() {
    this.toggleAction = !this.toggleAction;
    this.lengthItems = this.log.length + 1;
    this.log.push(new Date());
  }
  removeItems(id: number) {
    const postion = id + 1;
    this.log.splice(postion, 1);
  }
  getEvenOddNumber(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
  navigateElement(seletedNavigateName: string) {
    this.headerNavigationName = seletedNavigateName;

  }
  creatAccount(accountData: { accountName: string, accountType: string }) {
    // this.accountData.push(accountData);
    this.commonDataService.creatAccount(accountData.accountName, accountData.accountType);
  }

}
