import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultTextColor = '';
@Input() defualtBgColor: string;
@HostBinding('style.color') textColor: string = this.defaultTextColor;
@HostBinding('attr.role') role = 'asif';
@HostBinding('style.backgroundColor') bgColor: string = this.defualtBgColor;
  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }
  ngOnInit() {
    this.renderer.addClass(this.elemRef.nativeElement, 'text-color');
    this.textColor = this.defaultTextColor;
    this.bgColor = this.defualtBgColor;
  }
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', '#fff');
    console.log(eventData);

    this.textColor = this.defaultTextColor;

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
  }
}

