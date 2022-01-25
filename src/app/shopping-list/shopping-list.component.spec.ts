import { TestBed } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShoppingListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
})