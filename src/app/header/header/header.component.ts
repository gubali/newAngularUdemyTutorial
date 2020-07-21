import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Input() activeNavigationTab: string;
  @Output() selectedFeatureName = new EventEmitter<string>();
  public toggleDropdownFlag: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onSelectedValue(featureName: string) {
    this.selectedFeatureName.emit(featureName);
  }
  toggleClass() {
   this.toggleDropdownFlag = !this.toggleDropdownFlag

  }
}
