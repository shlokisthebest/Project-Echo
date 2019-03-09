import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductDisplayComponent } from './all-product-display.component';

describe('AllProductDisplayComponent', () => {
  let component: AllProductDisplayComponent;
  let fixture: ComponentFixture<AllProductDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
