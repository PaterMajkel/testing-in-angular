import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective implements AfterViewInit {

  @Input() date!: string;
  @Input() sep!: string;
  @Input() color!: string;
  @Input() font!: string;
  @Input() order!: string;


  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    console.log(this.date, this.sep);
    const elDate: string[] = this.date.split('-');
    let outDate = '';
    if(this.order==="reverse"){
        elDate.forEach((el, index) =>
             index < (elDate.length - 1) ? outDate += el + this.sep : outDate += el);
    }
    if(this.order==="normal"){
      elDate.reverse().forEach((el, index) =>
           index < (elDate.length - 1) ? outDate += el + this.sep : outDate += el);
  }
    this.element.nativeElement.innerText = outDate;
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontFamily = this.font;
  }



}
