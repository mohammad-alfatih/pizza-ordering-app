import * as actions from './cart.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { MenuItem } from '../../menu/store/menu.reducer';

// Cart Status Enums
export enum CartStatus {
  ACTIVE = 1,
  QUEUED = 2,
  SUBMIT = 3
}

// Main data interface
export interface Cart {
  id: string;
  menuItems: MenuItem[];
  subtotal: number;
  discountCode: string;
  discountAmount: string;
  salesTax: number;
  totalPrice: number;
  status: CartStatus;
}

// Entity adapter
export const adapter = createEntityAdapter<Cart>();
export interface State extends EntityState<Cart> {}

// Default data / initial state
const defaultState = {
  ids: ['001'],
  entities: {
    '001': {
      id: null,
      menuItems: null,
      subtotal: undefined,
      discountCode: null,
      discountAmount: null,
      salesTax: undefined,
      totalPrice: undefined,
    }
  }
};
export const initialState: State = adapter.getInitialState(defaultState);

// Reducer
export function cartReducer(state: State = initialState, action: actions.CartActions) {
  switch (action.type) {

    case actions.ADD:
      return adapter.addAll(action.cartList, state);

    case actions.CREATE:
      return adapter.addOne(action.cart, state);

    case actions.UPDATE:
      return adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return adapter.removeOne(action.id, state);

    default:
      return state;
  }
}

// Create the default selectors
export const getCartState = createFeatureSelector<State>('cart');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getCartState);
