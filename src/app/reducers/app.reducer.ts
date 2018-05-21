import { ActionReducerMap } from '@ngrx/store';
import { menuReducer } from '../menu/store/menu.reducer';
import { cartReducer } from '../cart/store/cart.reducer';

export const reducers: ActionReducerMap<any> = {
  menu: menuReducer,
  cart: cartReducer
};
