import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructureDirective]'
})
export class CustomStructureDirectiveDirective {

  @Input() set appCustomStructureDirective(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tempRef)
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
