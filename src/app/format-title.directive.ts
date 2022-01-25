import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFormatTitle]',
})
export class FormatTitleDirective {
  @Input('font-color') color!: string;
  @Input('font-family') font_family!: string;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (!this.color) this.color = 'red';
    this.element.nativeElement.style.color = this.color;

    this.element.nativeElement.style.fontFamily = this.font_family;
  }
}
