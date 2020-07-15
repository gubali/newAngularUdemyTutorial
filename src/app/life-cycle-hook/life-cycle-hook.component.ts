import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() inputData;
  constructorVar = "";
  ngOnInitVar = ""
  ngOnChangesVar = "";
  ngDoCheckVar = "";
  name = "";
  constructor() {
    this.constructorVar = "constructor Called";
  }
  ngOnChanges(changes: SimpleChanges) {
    // this.ngOnChangesVar = "ngOnChanges Called";
    console.log(changes);

  }
  ngOnInit() {
    this.ngOnInitVar = "ngOnInit called";
  }
  ngDoCheck(): void {
    this.ngDoCheckVar = "ngDoCheck called";
    console.log("ngDoCheck called");

  }
  doCheck() {
    console.log(this.name)
  }

  ngAfterContentInit(): void {
    console.log("ngAfterInitCall");

  }
}
