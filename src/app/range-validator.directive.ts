import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appRangeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RangeValidatorDirective,
      multi: true,
    },
  ],
})
export class RangeValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log(control.value);
    if (control.value > 0 && control.value < 10) return null;

    return { appRangeValidator: true };
  }
}
