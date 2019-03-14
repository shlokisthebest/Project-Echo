import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEchoIndoorComponent } from './header-echo-indoor.component';

describe('HeaderEchoIndoorComponent', () => {
  let component: HeaderEchoIndoorComponent;
  let fixture: ComponentFixture<HeaderEchoIndoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEchoIndoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEchoIndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
