import { LoggingServices } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()

export class CommonDataServices {
  public accountData: Array<{ accountName: string, accountType: string }> = [
    {
      accountName: "Saving Account",
      accountType: "Active"
    },
    {
      accountName: "Fixed Account-12",
      accountType: "Inactive"
    }
  ];
  constructor(private loginService: LoggingServices) { }

  creatAccount(accountName: string, accountType: string) {
    this.accountData.push({ accountName, accountType });
    console.log("data service method: ", this.accountData);
    this.loginService.loginStatus(accountType)
  }
}