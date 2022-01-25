import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pl';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MyDirective } from './my-directive.directive';
import { PrintShoppingListComponent } from './print-shoppinglist/print-shoppinglist.component';
import { AllergenDirective } from './allergen.directive';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FormatTitleDirective } from './format-title.directive';
import { TestPipe } from './test.pipe';
import { MultiCurrencyPipe } from './multi-currency.pipe';
import { DecimalPipe } from '@angular/common';
import { PlDatePipe } from './date.pipe';
import { TestExtCurrencyPipe } from './test-ext-currency.pipe';
import { AddItemComponent } from './add-item/add-item.component';
import { MinLengthValidatorDirective } from './min-length-validator.directive';
import { PolishTitlePipe } from './polish-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    MyDirective,
    PrintShoppingListComponent,
    AllergenDirective,
    EditItemComponent,
    FormatTitleDirective,
    TestPipe,
    MultiCurrencyPipe,
    PlDatePipe,
    TestExtCurrencyPipe,
    AddItemComponent,
    MinLengthValidatorDirective,
    PolishTitlePipe,
    
  ],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
