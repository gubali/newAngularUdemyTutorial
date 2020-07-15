import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {
  serverElement = [];
  serverName = "";
  serverContent = ""
  itemName = "";
  totalCount: number;
  childName = "Welcome!"
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() getAlertBoxFromChild = new EventEmitter<{ total: number, itemName: string }>();
  @ViewChild('firstName', { static: false }) viewChildName: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
    this.resetControls();
  }
  onAddBulePrintServer() {
    this.bluePrintCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
    this.resetControls();
  }
  getAlert() {
    this.getAlertBoxFromChild.emit({ itemName: this.itemName.toLocaleLowerCase(), total: this.totalCount });
    this.totalCount = null;
    this.itemName = "";

  }
  resetControls() {
    this.serverName = "";
    this.serverContent = "";
  }
  localRefrenceControls(event) {
    console.log("Local refernce data", event);
  }
  fnViewChild() {
    console.log("View child data", this.viewChildName.nativeElement.value);
  }
}
