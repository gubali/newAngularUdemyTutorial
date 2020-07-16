import { Component, OnInit, Input, SimpleChanges, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('contentParagraph', {static: false}) paragraphElement:ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngAfterContentInit(): void {
    console.log('Text Content of paragraph: ' + this.paragraphElement.nativeElement.textContent);
  }
}
