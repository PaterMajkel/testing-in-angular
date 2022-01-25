import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePL'
})
export class TestPipe implements PipeTransform {

  transform(value: string): string {
    let ret=value.toLowerCase().split('');
    ret[0]=ret[0].toUpperCase();
    return ret.join('');
  }

}
