import { Action } from '@ngrx/store';
import { Cart } from './cart.reducer';

export const QUERY = '[Cart] Query';
export const ADD = '[Cart] Add';

export const CREATE = '[Cart] Save';
export const UPDATE = '[Cart] Queue';
export const DELETE = '[Cart] Delete';

export class Query implements Action {
  readonly type = QUERY;
}

export class Add implements Action {
  readonly type = ADD;
  constructor (public cartList: Cart[]) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor (public cart: Cart) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor (public id: string, public changes: Partial<Cart>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor (public id: string) {}
}

export type CartActions
  = Query
  | Add
  | Create
  | Update
  | Delete
  ;
