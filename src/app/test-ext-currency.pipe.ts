import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testExtCurrency'
})
export class TestExtCurrencyPipe extends DecimalPipe implements PipeTransform {

  override transform(value: any, ...args: any[]): any {
    const decChar=args[0];
    const symbol=args[1];
    
    let newValue=super.transform(value,'.2-2')?.toString();
    console.log(value,decChar,newValue);
    if(decChar==='.') newValue=newValue?.replace(',',decChar);
    else newValue=newValue?.replace('.',decChar);
    console.log(newValue);
    return newValue+' '+symbol;
  }

}
