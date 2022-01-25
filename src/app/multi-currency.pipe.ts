import { DecimalPipe, formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multicurrency',
})
export class MultiCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string | undefined {
    const formatDot = args[0];
    const currSymbol = args[1];
    //  let currencyRet = this.decimalPipe.transform(value, '1.2-2')?.toString();
    let currencyRet = formatNumber(value, 'pl', '1.2-2');

    currencyRet = currencyRet?.replace('.', formatDot);
    currencyRet = currencyRet?.replace(',', formatDot);
    return currencyRet + ' ' + currSymbol;
  }

  //  constructor(private decimalPipe: DecimalPipe) { }
}
