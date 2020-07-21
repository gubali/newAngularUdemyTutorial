import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective {
  @HostBinding('class.open') toggleDropdownFlag: boolean = false;
  // @HostListener('click') toggleDropdown() {
  //   this.toggleDropdownFlag = !this.toggleDropdownFlag;
  // }

  //below code remove class while click on anywhere of screen
  @HostListener('document:click', ['$event'])  toggleDropdown(event:Event){
    this.toggleDropdownFlag = this.elemRef.nativeElement.contains(event.target)? !this.toggleDropdownFlag: false
  }
  constructor(private elemRef:ElementRef){}
}