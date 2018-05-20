import { Action } from '@ngrx/store';
import { MenuItem } from './menu.reducer';

export const QUERY = '[MenuItems] Query';
export const ADD = '[MenuItems] Add';

export const CREATE = '[MenuItems] Create';
export const UPDATE = '[MenuItems] Update';
export const DELETE = '[MenuItems] Delete';

export class Query implements Action {
  readonly type = QUERY;
}

export class Add implements Action {
  readonly type = ADD;
  constructor(public menuItemList: MenuItem[]) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public menuItem: MenuItem) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<MenuItem>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export type MenuActions
  = Query
  | Add
  | Create
  | Update
  | Delete
  ;
