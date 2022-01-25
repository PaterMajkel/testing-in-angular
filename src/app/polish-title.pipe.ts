import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polishTitle',
})
export class PolishTitlePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    let title = value.toLowerCase();

    return title;
  }
}
