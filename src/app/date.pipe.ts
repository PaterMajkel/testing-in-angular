import { DatePipe, DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plDate',
})
export class PlDatePipe extends DatePipe implements PipeTransform {
  override transform(value: any, ...args: any[]): any {
    console.log('date pipe');
    const datePl = super.transform(value, 'medium');
    let dateTab = null;
    if (datePl !== null) {
      dateTab = datePl.split(' ');
      let datePlForm = '';
      switch (dateTab[1]) {
        case 'sty':
          dateTab[1] = 'stycznia';
          break;
        case 'cze':
          dateTab[1] = 'czerwca';
          break;
        case 'gru':
          dateTab[1] = 'grudnia';
          break;
      }
      dateTab.forEach((el, ind) => {
        if (ind === 2) {
          el += ' godzina';
        }
        datePlForm += el + ' ';
      });

      return datePlForm;
    }
    return null;
  }
}
