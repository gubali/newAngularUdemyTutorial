import { Component, OnInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
@Component({
  //  selector: "[app-server]", // selector usinf directive
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit, AfterContentInit {
  public serverStatus = 'online';
  // serverElements = [{ type: "blueprint", name: "test server", content: "Server is working" }];
  childDataArray: Array<{ itemName: string, total: number }> = [];
  serverElements = [];
  @ContentChild('imAppComponent', { static: false }) localContentRef: ElementRef;

  constructor() { }
  ngOnInit() {

  }
  ngAfterContentInit() {
   console.log('Viwe coontent init' + this.localContentRef);

  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    if (serverData.serverName !== '' && serverData.serverContent !== '') {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }
  }
  onBlueprintAdded(bluprintServerData: { serverName: string, serverContent: string }) {
    if (bluprintServerData.serverName !=='' && bluprintServerData.serverContent !== '') {
      this.serverElements.push({
        type: 'blueprint',
        name: bluprintServerData.serverName,
        content: bluprintServerData.serverContent
      });
    }
  }
  childRecvdData(eventData: { itemName: string, total: number, }) {
    if (eventData.itemName !== '' && (eventData.total !== null || eventData.total !== undefined)) {
      this.childDataArray.push({
        itemName: eventData.itemName,
        total: eventData.total * 2,
      });
    }

  }
  applyTableRowColorClass(data) {
    if (data.itemName === 'milk') {
      return 'bg-primary';
    }
  }
}
