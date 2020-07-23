import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LoggingServices } from '../shared/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  @Output() createAccountEmitter = new EventEmitter<{ accountName: string, accountType: string }>();
  @ViewChild('accountName', {static: false}) accountInput: ElementRef;
  @ViewChild('accountType', {static: false}) accountType: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onCreateAccount(accName: string, accType: string) {
    console.log('emited data from new-accoint insert', {accountName: accName, accountType: accType});
    this.createAccountEmitter.emit({accountName: accName, accountType: accType});
    this.accountInput.nativeElement.value = '';
    this.accountType.nativeElement.value = '';
  }

}
