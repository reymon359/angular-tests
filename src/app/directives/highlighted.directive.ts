import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private elementRef: ElementRef) {
    // elementRef.nativeElement.style.backgroundColor =  "yellow";
  }

  @Input('appHighlighted') newColor: string;

  @HostListener('mouseenter') mouseEntered() {
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.highlight(this.newColor || 'yellow');
  }
  @HostListener('mouseleave') mouseLeft() {
    this.highlight(null);

  }
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;

  }
}
