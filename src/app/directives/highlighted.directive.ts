import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private elementRef: ElementRef) {
  elementRef.nativeElement.style.backgroundColor =  "yellow";
   }

}
