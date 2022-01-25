import { TestBed } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';
import { TestExtCurrencyPipe} from '../test-ext-currency.pipe'
import { PlDatePipe } from '../date.pipe'
import { TestPipe } from '../test.pipe'
import { EditItemComponent } from '../edit-item/edit-item.component';
import {PrintShoppingListComponent} from '../print-shoppinglist/print-shoppinglist.component'
import { FormsModule } from '@angular/forms';

describe('ShoppingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [FormsModule],
      declarations: [ShoppingListComponent, TestExtCurrencyPipe, PlDatePipe, PrintShoppingListComponent, TestPipe, EditItemComponent],
    }).compileComponents();
  });
  //APP CREATION TEST
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //APP RENDER TESTS
  it('should render PL calculation', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('zł');
  });

  it('should render EUR calculation', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#eu').textContent).toContain('€');
  });

  it('should render EUR2 calculation', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#eu2').textContent).toContain('euro');
  });
  it('should render by css', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.test').textContent).toContain('zł');
  });
  it('should render date', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#date').textContent).toContain('Jan');
  });
  it('should render li', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('milk');
    expect(compiled.querySelector('li:nth-of-type(2)').textContent.trim()).toBe('orange');
    expect(compiled.querySelector('li:nth-of-type(3)').textContent.trim()).toBe('onion');
  });
  //not gonna do more as I would have to interfere with html code



  //APP COMPONENT RENDER TESTS
  it('should render print shopping list', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-print-shoppinglist')).toBeTruthy('render print-ShoppingList component');
  });

  it('should render print shopping list', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-edit-item')).toBeTruthy('render editItem component');
  });


  //TESTS FOR COMPONENT ATTRIBUTES
  it('should have 3 items at start', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.items.length).toEqual(3);
  });

  it('should have -1 selected value', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.el_clicked).toEqual(-1);
  });


  //TEST FOR EVENT
  it(`should show selected item`, () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const component = fixture.componentInstance;
    //before
    const element = fixture.nativeElement;
    fixture.detectChanges();
    expect(component.el_clicked).toEqual(-1);
    expect(fixture.nativeElement.querySelector('input:nth-of-type(1)')).toBe(null);
    const clickEl = fixture.nativeElement.querySelector('li:nth-of-type(3)');
    clickEl.click();

    fixture.detectChanges();

    //after
    expect(component.el_clicked).toEqual(2);
    expect(fixture.nativeElement.querySelector('input:nth-of-type(1)').getAttribute("ng-reflect-model")).toBe('onion');
  });
})