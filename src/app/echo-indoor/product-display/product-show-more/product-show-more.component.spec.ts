import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowMoreComponent } from './product-show-more.component';

describe('ProductShowMoreComponent', () => {
  let component: ProductShowMoreComponent;
  let fixture: ComponentFixture<ProductShowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
