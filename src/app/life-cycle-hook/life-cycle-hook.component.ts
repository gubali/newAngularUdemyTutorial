import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input() inputData;
  constructorVar = "";
  ngOnInitVar = ""
  ngOnChangesVar = "";
  ngDoCheckVar = "";
  name = "";
  @ViewChild('hookHeader', { static: false }) localHookHeader: ElementRef;
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

  ngAfterContentInit() {
    console.log("ngAfterInitCall");
    }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
   // console.log(this.localHookHeader);
    this.localHookHeader.nativeElement.innerHTML = "Text changed after view init";
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }

  ngOnDestroy() {
    console.log("Destroye called");
  }
  onDestroyeCalled() {
    alert('Destroye called');
  }
}
