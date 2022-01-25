import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appMinLengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinLengthValidatorDirective,
      multi: true,
    },
  ],
})
export class MinLengthValidatorDirective implements Validator {
  @Input() minVal: string = '10';
  @Input() maxVal: string = '20';

  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);
    if (
      control.value < parseInt(this.maxVal) &&
      control.value > parseInt(this.minVal)
    )
      return null;

    return { appMinLengthValidator: true };
  }
}
