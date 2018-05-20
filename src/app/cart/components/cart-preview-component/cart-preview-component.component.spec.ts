import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPreviewComponentComponent } from './cart-preview-component.component';

describe('CartPreviewComponentComponent', () => {
  let component: CartPreviewComponentComponent;
  let fixture: ComponentFixture<CartPreviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPreviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
