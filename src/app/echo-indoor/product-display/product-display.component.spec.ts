import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayShowComponent } from './product-display.component';

describe('ProductDisplayComponent', () => {
  let component: ProductDisplayShowComponent;
  let fixture: ComponentFixture<ProductDisplayShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
