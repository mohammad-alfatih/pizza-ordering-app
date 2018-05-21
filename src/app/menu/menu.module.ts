import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { menuReducer } from './store/menu.reducer';

import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './containers/menu-component/menu-component.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('menu', menuReducer)
  ],
  declarations: [MenuItemComponent, MenuComponent]
})
export class MenuModule { }
