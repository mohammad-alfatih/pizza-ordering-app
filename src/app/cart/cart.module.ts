import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { CartPreviewComponentComponent } from './components/cart-preview-component/cart-preview-component.component';
import { CartComponentComponent } from './containers/cart-component/cart-component.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', cartReducer)
  ],
  declarations: [CartPreviewComponentComponent, CartComponentComponent]
})
export class CartModule { }
