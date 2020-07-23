import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplateandcontent',
  templateUrl: './ngtemplateandcontent.component.html',
  styleUrls: ['./ngtemplateandcontent.component.css']
})
export class NgtemplateandcontentComponent implements OnInit {
  public isOn = true;

  country: Array<{ id: number, name: string }> = [
    { id: 1, name: 'india' },
    { id: 2, name: 'pakistan' },
    { id: 3, name: 'afganistan' },
    { id: 4, name: 'Sril lanka' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
