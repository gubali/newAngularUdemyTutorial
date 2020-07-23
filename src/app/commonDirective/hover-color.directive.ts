import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @HostBinding('style.backgroundColor') c_color = 'blue';
  @HostBinding('style.color') color = 'white';
  @HostListener('mouseenter') c_mouseEnter() {
    this.c_color = 'red';
  }
  @HostListener('mouseleave') c_mouseLeave() {
    this.c_color = 'yellow';
    this.color = 'green';
  }

  constructor() { }

}
