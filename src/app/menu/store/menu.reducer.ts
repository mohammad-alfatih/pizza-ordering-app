import * as actions from './menu.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Main data interface
export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imgUrl: string;
  price: number;
  ordered: boolean;
}

// Entity adapter
export const adapter = createEntityAdapter<MenuItem>();
export interface State extends EntityState<MenuItem> {}

// Default data / initial state
const defaultState = {
  ids: [],
  entities: {}
};
export const initialState: State = adapter.getInitialState(defaultState);


// Reducer
export function menuReducer(state: State = initialState, action: actions.MenuActions) {
  switch (action.type) {

    case actions.ADD:
      return adapter.addAll(action.menuItemList, state);

    case actions.CREATE:
      return adapter.addOne(action.menuItem, state);

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
export const getMenuState = createFeatureSelector<State>('menu');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getMenuState);
