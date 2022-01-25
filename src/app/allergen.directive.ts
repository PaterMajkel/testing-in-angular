import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAllergen]',
})
export class AllergenDirective {
  @Input() color: string = '';
  allergens: string[] = ['milk', 'bread', 'nuts'];

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    console.log('all', this.color);
    if (this.allergens.includes(this.element.nativeElement.innerText)) {
      this.element.nativeElement.style.color = this.color;
    }
  }
}
